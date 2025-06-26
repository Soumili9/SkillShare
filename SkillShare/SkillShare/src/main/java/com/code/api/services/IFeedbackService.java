package com.code.api.services;

import java.util.List;
import com.code.api.models.Feedback;

public interface IFeedbackService {
    Feedback add(Feedback feedback);
    Feedback update(Feedback feedback);
    String delete(int id);
    List<Feedback> getByCourseId(int courseId);
}
