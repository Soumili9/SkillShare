package com.code.api.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.code.api.models.CourseEnrollmentDetails;
import com.code.api.repositories.ICourseEnrollmentDetailsRepository;

@Service
public class CourseEnrollmentDetailsService implements ICourseEnrollmentDetailsService {

    @Autowired
    ICourseEnrollmentDetailsRepository enrollmentDetailsRepo;

    @Override
    public CourseEnrollmentDetails add(CourseEnrollmentDetails detail) {
        return enrollmentDetailsRepo.save(detail);
    }

    @Override
    public CourseEnrollmentDetails update(CourseEnrollmentDetails detail) {
        return enrollmentDetailsRepo.save(detail);
    }

    @Override
    public String delete(CourseEnrollmentDetails detail) {
        enrollmentDetailsRepo.delete(detail);
        return "Record is deleted successfully";
    }

    @Override
    public String delete(int id) {
        CourseEnrollmentDetails detail = enrollmentDetailsRepo.findById(id).get();
        if (detail == null) {
            return "Record not found with id " + id;
        }
        enrollmentDetailsRepo.delete(detail);
        return "Record is deleted";
    }

    @Override
    public List<CourseEnrollmentDetails> getAll() {
        return enrollmentDetailsRepo.findAll();
    }

    @Override
    public CourseEnrollmentDetails getById(int id) {
        return enrollmentDetailsRepo.findById(id).get();
    }

    @Override
    public CourseEnrollmentDetails getByEnrollmentId(int id) {
        return enrollmentDetailsRepo.findByEnrollmentId(id);
    }
}
