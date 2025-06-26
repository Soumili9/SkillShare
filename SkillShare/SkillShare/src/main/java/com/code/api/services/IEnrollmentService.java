package com.code.api.services;

import java.util.List;
import com.code.api.models.Enrollment;

public interface IEnrollmentService {
    Enrollment add(Enrollment enrollment);
    String delete(int id);
    List<Enrollment> getAll();
    List<Enrollment> getByUserId(int userId);
}
