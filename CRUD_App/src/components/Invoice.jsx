import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Invoice = ({ orderId }) => {
  const [orderDetails, setOrderDetails] = useState(null);
  const [error, setError] = useState(null); // State to handle fetch errors
  const [isLoading, setIsLoading] = useState(true); // State to manage loading

  useEffect(() => {
    const fetchOrderDetails = async () => {
      setIsLoading(true); // Start loading
      setError(null); // Clear previous errors
      try {
        const response = await axios.get(`http://localhost:8185/orders/${orderId}`);
        if (response.data) {
          setOrderDetails(response.data);
        } else {
          // Handle case where data is empty but status is 200
          setError("Order details not found.");
        }
      } catch (err) {
        console.error('Error fetching order details:', err);
        setError("Failed to load order details. Please try again."); // Set user-friendly error message
      } finally {
        setIsLoading(false); // End loading
      }
    };
    if (orderId) { // Only fetch if orderId is provided
      fetchOrderDetails();
    } else {
      setIsLoading(false);
      setError("No Order ID provided.");
    }
  }, [orderId]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div style={{ color: 'red', textAlign: 'center' }}>Error: {error}</div>;
  }

  if (!orderDetails) {
      return <div style={{ textAlign: 'center' }}>Order details not available.</div>;
  }


  return (
    <div style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '5px', width: '60%', margin: 'auto' }}>
      <h1 style={{ textAlign: 'center' }}>Enrollment Invoice</h1>
      <p><strong>Enrollment ID:</strong> {orderDetails.orderid}</p>
      <p><strong>Date:</strong> {orderDetails.orderdate}</p>
      <p><strong>Status:</strong> {orderDetails.status}</p>
      <p><strong>Total:</strong> ₹{orderDetails.totalamount}</p>
      <h3>Courses:</h3>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Title</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Price</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Qty</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Total</th>
          </tr>
        </thead>
        <tbody>
          {orderDetails.itemOrderDetails && Array.isArray(orderDetails.itemOrderDetails) && orderDetails.itemOrderDetails.map((course) => (
            <tr key={course.itemId || course.courseTitle}> {/* Use itemId or courseTitle as key */}
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{course.courseTitle}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>₹{course.price}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{course.qty}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>₹{course.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {(!orderDetails.itemOrderDetails || orderDetails.itemOrderDetails.length === 0) && (
          <p style={{ textAlign: 'center' }}>No course details available for this order.</p>
      )}
      <p style={{ textAlign: 'center', fontWeight: 'bold', marginTop: '20px' }}>Thank you for learning with us!</p>
    </div>
  );
};

export default Invoice;
