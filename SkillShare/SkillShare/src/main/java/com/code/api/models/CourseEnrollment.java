package com.code.api.models;

import java.time.LocalDateTime;
import java.util.List;

import jakarta.persistence.*;

@Entity
@Table(name = "course_enrollment")
public class CourseEnrollment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "enrollment_id")
    int enrollmentId;

    @Column(name = "enroll_date")
    String enrollDate;

    @Column(name = "total_fee")
    double totalFee;

    @Column(name = "razorpayOrderId")
    private String razorpayOrderId;

    @Column(name = "status")
    private String status = "in-Process";

    private LocalDateTime createdAt = LocalDateTime.now();

    @ManyToOne
    @JoinColumn(name = "userid")
    Users users;

    @OneToMany(mappedBy = "courseEnrollment")
    List<CourseEnrollmentDetails> courseEnrollmentDetails;

    public CourseEnrollment() {}

    public int getEnrollmentId() {
        return enrollmentId;
    }

    public void setEnrollmentId(int enrollmentId) {
        this.enrollmentId = enrollmentId;
    }

    public String getEnrollDate() {
        return enrollDate;
    }

    public void setEnrollDate(String enrollDate) {
        this.enrollDate = enrollDate;
    }

    public double getTotalFee() {
        return totalFee;
    }

    public void setTotalFee(double totalFee) {
        this.totalFee = totalFee;
    }

    public Users getUsers() {
        return users;
    }

    public void setUsers(Users users) {
        this.users = users;
    }

    public String getRazorpayOrderId() {
        return razorpayOrderId;
    }

    public void setRazorpayOrderId(String razorpayOrderId) {
        this.razorpayOrderId = razorpayOrderId;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }

    public List<CourseEnrollmentDetails> getCourseEnrollmentDetails() {
        return courseEnrollmentDetails;
    }

    public void setCourseEnrollmentDetails(List<CourseEnrollmentDetails> courseEnrollmentDetails) {
        this.courseEnrollmentDetails = courseEnrollmentDetails;
    }
}
