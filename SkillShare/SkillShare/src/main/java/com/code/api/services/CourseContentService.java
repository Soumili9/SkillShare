package com.code.api.services;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.code.api.models.CourseContent;
import com.code.api.repositories.ICourseContentRepository;

@Service
public class CourseContentService implements ICourseContentService {

    @Autowired
    ICourseContentRepository contentRepo;

    @Override
    public CourseContent add(CourseContent content) {
        return contentRepo.save(content);
    }

    @Override
    public CourseContent update(CourseContent content) {
        return contentRepo.save(content);
    }

    @Override
    public String delete(int id) {
        contentRepo.deleteById(id);
        return "Content deleted";
    }

    @Override
    public List<CourseContent> getByCourseId(int courseId) {
        return contentRepo.findByCourseCourseId(courseId);
    }
}

