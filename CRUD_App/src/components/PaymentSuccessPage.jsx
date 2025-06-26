import React from 'react';
import { useParams } from 'react-router-dom';
import Invoice from './Invoice';

const PaymentSuccessPage = () => {
    const { orderId } = useParams();

    return (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <h1>Enrollment Successful!</h1>
            <p>Thank you for enrolling. Your enrollment ID is: <strong>{orderId}</strong></p>
            <Invoice orderId={orderId} />
        </div>
    );
};

export default PaymentSuccessPage;
