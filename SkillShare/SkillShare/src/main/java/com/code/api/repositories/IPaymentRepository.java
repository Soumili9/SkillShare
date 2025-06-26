package com.code.api.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.code.api.models.Payment;

@Repository
public interface IPaymentRepository extends JpaRepository<Payment, Integer> {
}
