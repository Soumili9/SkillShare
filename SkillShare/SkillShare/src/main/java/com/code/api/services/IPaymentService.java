package com.code.api.services;

import java.util.List;
import com.code.api.models.Payment;

public interface IPaymentService {
    public Payment creatPayment(Payment payment);
    public Payment getPaymentById(int id);
    public List<Payment> getAllPayments();
}
