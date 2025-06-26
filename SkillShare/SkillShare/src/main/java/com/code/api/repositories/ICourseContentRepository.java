package com.code.api.repositories;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.code.api.models.CourseContent;

@Repository
public interface ICourseContentRepository extends JpaRepository<CourseContent, Integer> {
    List<CourseContent> findByCourseCourseId(int courseId);
}
