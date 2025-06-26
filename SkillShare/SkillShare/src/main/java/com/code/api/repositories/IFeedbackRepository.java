package com.code.api.repositories;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.code.api.models.Feedback;

@Repository
public interface IFeedbackRepository extends JpaRepository<Feedback, Integer> {
    List<Feedback> findByCourseCourseId(int courseId);
}
