package com.code.api.services;

import java.util.List;
import com.code.api.models.Course;

public interface ICourseService {
    public Course add(Course course);
    public Course update(Course course);
    public String delete(Course course);
    public String delete(int id);
    public List<Course> getAll();
    public Course getById(int id);
}
