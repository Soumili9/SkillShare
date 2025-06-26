package com.code.api.models;

import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

public class CourseCartItem {

    private Integer courseId;
    private String courseTitle;
    private int coursePrice;
    private String thumbnail;
    private int quantity;

    @ManyToOne
    @JoinColumn(name = "categoryId")
    private Category category;

    public Integer getCourseId() {
        return courseId;
    }
    public void setCourseId(Integer courseId) {
        this.courseId = courseId;
    }
    public String getCourseTitle() {
        return courseTitle;
    }
    public void setCourseTitle(String courseTitle) {
        this.courseTitle = courseTitle;
    }
    public int getCoursePrice() {
        return coursePrice;
    }
    public void setCoursePrice(int coursePrice) {
        this.coursePrice = coursePrice;
    }
    public String getThumbnail() {
        return thumbnail;
    }
    public void setThumbnail(String thumbnail) {
        this.thumbnail = thumbnail;
    }
    public int getQuantity() {
        return quantity;
    }
    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }
    public Category getCategory() {
        return category;
    }
    public void setCategory(Category category) {
        this.category = category;
    }
}
