package com.code.api.controllers;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.code.api.models.Feedback;
import com.code.api.services.IFeedbackService;

@RestController
@RequestMapping("api/feedbacks/")
public class FeedbackController {

    @Autowired
    IFeedbackService feedbackService;

    @GetMapping(value="/course/{courseId}")
    public List<Feedback> getFeedbackByCourse(@PathVariable("courseId") int courseId) {
        return feedbackService.getByCourseId(courseId);
    }

    @PostMapping(value="add")
    public Feedback addFeedback(@RequestBody Feedback feedback) {
        return feedbackService.add(feedback);
    }

    @PutMapping(value="edit")
    public Feedback editFeedback(@RequestBody Feedback feedback) {
        return feedbackService.update(feedback);
    }

    @DeleteMapping(value="delete/{id}")
    public String deleteFeedback(@PathVariable("id") int id) {
        return feedbackService.delete(id);
    }
}
