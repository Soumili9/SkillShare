package com.code.api.controllers;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.code.api.models.Course;
import com.code.api.services.ICourseService;

@RestController
@RequestMapping("api/courses/")
public class CourseController {

    @Autowired
    ICourseService courseService;

    @GetMapping(value="/")
    public List<Course> getAllCourses() {
        return courseService.getAll();
    }

    @GetMapping(value="/{id}")
    public Course getCourseById(@PathVariable("id") int id) {
        return courseService.getById(id);
    }

    @PostMapping(value="create")
    public Course createCourse(@RequestBody Course course) {
        return courseService.add(course);
    }

    @PutMapping(value="edit")
    public Course editCourse(@RequestBody Course course) {
        return courseService.update(course);
    }

    @DeleteMapping(value="delete/{id}")
    public String deleteCourse(@PathVariable("id") int id) {
        return courseService.delete(id);
    }
}
