package com.code.api.services;

import java.util.List;
import com.code.api.models.CourseContent;

public interface ICourseContentService {
    CourseContent add(CourseContent content);
    CourseContent update(CourseContent content);
    String delete(int id);
    List<CourseContent> getByCourseId(int courseId);
}
