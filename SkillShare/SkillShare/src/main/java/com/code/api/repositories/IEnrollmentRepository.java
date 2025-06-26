package com.code.api.repositories;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.code.api.models.Enrollment;

@Repository
public interface IEnrollmentRepository extends JpaRepository<Enrollment, Integer> {
    List<Enrollment> findByUserUserid(int userId);
}
