package com.code.api.controllers;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.code.api.models.Enrollment;
import com.code.api.services.IEnrollmentService;

@RestController
@RequestMapping("api/enrollments/")
public class EnrollmentController {

    @Autowired
    IEnrollmentService enrollmentService;

    @GetMapping(value="/")
    public List<Enrollment> getAllEnrollments() {
        return enrollmentService.getAll();
    }

    @GetMapping(value="/user/{userId}")
    public List<Enrollment> getEnrollmentsByUser(@PathVariable("userId") int userId) {
        return enrollmentService.getByUserId(userId);
    }

    @PostMapping(value="enroll")
    public Enrollment enrollInCourse(@RequestBody Enrollment enrollment) {
        return enrollmentService.add(enrollment);
    }

    @DeleteMapping(value="withdraw/{id}")
    public String withdrawFromCourse(@PathVariable("id") int id) {
        return enrollmentService.delete(id);
    }
}
