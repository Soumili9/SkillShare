package com.code.api.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.code.api.models.Course;
import com.code.api.repositories.ICourseRepository;

@Service
public class CourseService implements ICourseService {

    @Autowired
    ICourseRepository courseRepository;

    @Override
    public Course add(Course course) {
        return courseRepository.save(course);
    }

    @Override
    public Course update(Course course) {
        return courseRepository.save(course);
    }

    @Override
    public String delete(Course course) {
        courseRepository.delete(course);
        return "Course is deleted successfully";
    }

    @Override
    public String delete(int id) {
        Optional<Course> courseOptional = courseRepository.findById(id);
        if (courseOptional.isPresent()) {
            courseRepository.delete(courseOptional.get());
            return "Record is deleted successfully";
        }
        return "Course with Id " + id + " not found";
    }

    @Override
    public List<Course> getAll() {
        return courseRepository.findAll();
    }

    @Override
    public Course getById(int id) {
        return courseRepository.findById(id).get();
    }
}
