package com.code.api.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.code.api.models.CourseEnrollment;

@Repository
public interface ICourseEnrollmentRepository extends JpaRepository<CourseEnrollment, Integer> {

    CourseEnrollment findByRazorpayOrderId(String razorpayOrderId);
}
