package com.code.api.services;

import java.util.List;
import com.code.api.models.CourseEnrollmentDetails;

public interface ICourseEnrollmentDetailsService {
    public CourseEnrollmentDetails add(CourseEnrollmentDetails detail);
    public CourseEnrollmentDetails update(CourseEnrollmentDetails detail);
    public String delete(CourseEnrollmentDetails detail);
    public String delete(int id);
    public List<CourseEnrollmentDetails> getAll();
    public CourseEnrollmentDetails getById(int id);
    public CourseEnrollmentDetails getByEnrollmentId(int id);
}
