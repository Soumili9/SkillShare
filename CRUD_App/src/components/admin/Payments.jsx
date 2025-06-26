import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import axios from "axios";

function Payments() {
    const [payments, setPayments] = useState([]);

    useEffect(() => {
        fetchPayments();
    }, []);

    const fetchPayments = async () => {
        const response = await axios.get("http://localhost:8185/api/payment/");
        setPayments(response.data);
    };

    return (
        <div>
            <h1>Payments</h1>
            <div className="mainleft">
                <Table className="table-image striped bordered hover" size="sm">
                    <thead>
                        <tr>
                            <th>Payment ID</th>
                            <th>Amount</th>
                            <th>Status</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {payments.map((p) => (
                            <tr key={p.id}>
                                <td>{p.razorpayPaymentId}</td>
                                <td>₹{p.amount}</td>
                                <td>{p.status}</td>
                                <td>{p.paidAt}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </div>
    );
}

export default Payments;
