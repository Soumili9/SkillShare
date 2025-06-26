package com.code.api.controllers;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.code.api.models.CourseContent;
import com.code.api.services.ICourseContentService;

@RestController
@RequestMapping("api/content/")
public class ContentController {

    @Autowired
    ICourseContentService contentService;

    @GetMapping(value="/course/{courseId}")
    public List<CourseContent> getContentByCourse(@PathVariable("courseId") int courseId) {
        return contentService.getByCourseId(courseId);
    }

    @PostMapping(value="add")
    public CourseContent addContent(@RequestBody CourseContent content) {
        return contentService.add(content);
    }

    @PutMapping(value="edit")
    public CourseContent editContent(@RequestBody CourseContent content) {
        return contentService.update(content);
    }

    @DeleteMapping(value="delete/{id}")
    public String deleteContent(@PathVariable("id") int id) {
        return contentService.delete(id);
    }
}
