import React, { useState } from 'react';
import { ListGroup, Modal, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import CartItem from './CartItem';
import axios from 'axios';

const Cart = ({ cartItems, removeFromCart, updateQuantity, clearCart }) => {
  const navigate = useNavigate();
  const total = cartItems.reduce((sum, item) => sum + item.itemPrice * item.quantity, 0);

  const [paymentError, setPaymentError] = useState(null);
  const [showErrorModal, setShowErrorModal] = useState(false);

  const handleCloseErrorModal = () => {
    setShowErrorModal(false);
    setPaymentError(null);
  };

  const handlePayment = async () => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      navigate("/login");
      return;
    }

    const orderRequest = {
      totalamount: total,
      userid: user.userid,
      items: cartItems,
    };

    try {
      const response = await axios.post("http://localhost:8185/orders/enroll", orderRequest);
      const order = response.data;

      const options = {
        key: "rzp_test_qDAV8sCeGjU7AR", // Consider moving this to environment variables
        amount: order.totalamount * 100,
        currency: "INR",
        name: "SkillShare",
        description: "Course Enrollment",
        order_id: order.razorpayOrderId,
        handler: async function (response) {
          const confirmData = {
            razorpayOrderId: response.razorpay_order_id,
            razorpayPaymentId: response.razorpay_payment_id,
          };

          try {
            await axios.post("http://localhost:8185/orders/confirm", confirmData);
            navigate(`/payment-success/${order.orderid}`);
            clearCart();
          } catch (confirmError) {
            console.error("Payment confirmation failed", confirmError);
            setPaymentError("Payment confirmed but failed to finalize order. Please contact support.");
            setShowErrorModal(true);
          }
        },
        prefill: {
          name: user.name,
          email: user.emailid,
        },
        theme: {
          color: "#3399cc",
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error("Payment initiation failed", error);
      setPaymentError("Failed to initiate payment. Please try again.");
      setShowErrorModal(true);
    }
  };

  return (
    <div>
      <h3>Your Enrollments</h3>
      <ListGroup>
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          cartItems.map((item) => (
            <CartItem
              key={item.itemId}
              item={item}
              removeFromCart={removeFromCart}
              updateQuantity={updateQuantity}
            />
          ))
        )}
      </ListGroup>
      <h4>Total: ₹{total.toFixed(2)}</h4>
      <button onClick={handlePayment} className="btn btn-success mt-3">
        Proceed to Enroll
      </button>

      {/* Error Modal */}
      <Modal show={showErrorModal} onHide={handleCloseErrorModal}>
        <Modal.Header closeButton>
          <Modal.Title>Payment Error</Modal.Title>
        </Modal.Header>
        <Modal.Body>{paymentError}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseErrorModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Cart;
