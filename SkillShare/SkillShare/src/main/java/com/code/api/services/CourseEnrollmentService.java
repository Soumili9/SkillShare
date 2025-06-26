package com.code.api.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.code.api.models.CourseEnrollment;
import com.code.api.repositories.ICourseEnrollmentRepository;

@Service
public class CourseEnrollmentService implements ICourseEnrollmentService {

    @Autowired
    ICourseEnrollmentRepository enrollmentRepo;

    @Override
    public CourseEnrollment add(CourseEnrollment enrollment) {
        return enrollmentRepo.save(enrollment);
    }

    @Override
    public CourseEnrollment update(CourseEnrollment enrollment) {
        return enrollmentRepo.save(enrollment);
    }

    @Override
    public String delete(CourseEnrollment enrollment) {
        enrollmentRepo.delete(enrollment);
        return "Record is deleted";
    }

    @Override
    public String delete(int id) {
        CourseEnrollment enrollment = enrollmentRepo.findById(id).get();
        if (enrollment == null) {
            return "Course Enrollment with Id " + id + " not found";
        }
        enrollmentRepo.delete(enrollment);
        return "Record is deleted";
    }

    @Override
    public List<CourseEnrollment> getAll() {
        return enrollmentRepo.findAll();
    }

    @Override
    public CourseEnrollment getById(int id) {
        return enrollmentRepo.findById(id).get();
    }

    @Override
    public CourseEnrollment getByRazorpayOrderId(String id) {
        return enrollmentRepo.findByRazorpayOrderId(id);
    }
}
