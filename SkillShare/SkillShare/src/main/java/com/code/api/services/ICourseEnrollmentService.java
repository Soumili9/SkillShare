package com.code.api.services;

import java.util.List;
import com.code.api.models.CourseEnrollment;

public interface ICourseEnrollmentService {
    public CourseEnrollment add(CourseEnrollment enrollment);
    public CourseEnrollment update(CourseEnrollment enrollment);
    public String delete(CourseEnrollment enrollment);
    public String delete(int id);
    public List<CourseEnrollment> getAll();
    public CourseEnrollment getById(int id);
    public CourseEnrollment getByRazorpayOrderId(String id);
}
