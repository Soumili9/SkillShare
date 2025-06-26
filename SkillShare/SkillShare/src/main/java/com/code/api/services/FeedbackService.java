package com.code.api.services;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.code.api.models.Feedback;
import com.code.api.repositories.IFeedbackRepository;

@Service
public class FeedbackService implements IFeedbackService {

    @Autowired
    IFeedbackRepository feedbackRepository;

    @Override
    public Feedback add(Feedback feedback) {
        return feedbackRepository.save(feedback);
    }

    @Override
    public Feedback update(Feedback feedback) {
        return feedbackRepository.save(feedback);
    }

    @Override
    public String delete(int id) {
        feedbackRepository.deleteById(id);
        return "Feedback deleted";
    }

    @Override
    public List<Feedback> getByCourseId(int courseId) {
        return feedbackRepository.findByCourseCourseId(courseId);
    }
}
