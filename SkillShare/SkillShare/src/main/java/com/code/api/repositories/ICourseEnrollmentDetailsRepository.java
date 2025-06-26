package com.code.api.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.code.api.models.CourseEnrollmentDetails;

@Repository
public interface ICourseEnrollmentDetailsRepository extends JpaRepository<CourseEnrollmentDetails, Integer> {

    @Query("SELECT ed FROM CourseEnrollmentDetails ed WHERE ed.courseEnrollment.enrollmentId = :id")
    CourseEnrollmentDetails findByEnrollmentId(@Param("id") Integer enrollmentId);
}
