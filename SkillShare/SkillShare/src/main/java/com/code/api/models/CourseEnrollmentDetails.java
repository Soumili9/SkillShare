package com.code.api.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

@Entity
@Table(name = "course_enrollment_details")
public class CourseEnrollmentDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "detail_id")
    int detailId;

    @Column(name = "course_title")
    String courseTitle;

    @Column(name = "category_name")
    String categoryName;

    @Column(name = "price")
    double price;

    @Column(name = "qty")
    int qty;

    @Column(name = "total")
    double total;

    @ManyToOne
    @JoinColumn(name = "enrollment_id")
    @JsonIgnore
    CourseEnrollment courseEnrollment;

    public CourseEnrollmentDetails() {}

    public int getDetailId() {
        return detailId;
    }

    public void setDetailId(int detailId) {
        this.detailId = detailId;
    }

    public String getCourseTitle() {
        return courseTitle;
    }

    public void setCourseTitle(String courseTitle) {
        this.courseTitle = courseTitle;
    }

    public String getCategoryName() {
        return categoryName;
    }

    public void setCategoryName(String categoryName) {
        this.categoryName = categoryName;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public int getQty() {
        return qty;
    }

    public void setQty(int qty) {
        this.qty = qty;
    }

    public double getTotal() {
        return total;
    }

    public void setTotal(double total) {
        this.total = total;
    }

    public CourseEnrollment getCourseEnrollment() {
        return courseEnrollment;
    }

    public void setCourseEnrollment(CourseEnrollment courseEnrollment) {
        this.courseEnrollment = courseEnrollment;
    }
}
