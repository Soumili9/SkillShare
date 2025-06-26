package com.code.api.services;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.code.api.models.Enrollment;
import com.code.api.repositories.IEnrollmentRepository;

@Service
public class EnrollmentService implements IEnrollmentService {

    @Autowired
    IEnrollmentRepository enrollmentRepository;

    @Override
    public Enrollment add(Enrollment enrollment) {
        return enrollmentRepository.save(enrollment);
    }

    @Override
    public String delete(int id) {
        enrollmentRepository.deleteById(id);
        return "Enrollment withdrawn";
    }

    @Override
    public List<Enrollment> getAll() {
        return enrollmentRepository.findAll();
    }

    @Override
    public List<Enrollment> getByUserId(int userId) {
        return enrollmentRepository.findByUserUserid(userId);
    }
}
