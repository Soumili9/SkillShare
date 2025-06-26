package com.code.api.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.code.api.models.Course;

@Repository
public interface ICourseRepository extends JpaRepository<Course, Integer> {  
}
