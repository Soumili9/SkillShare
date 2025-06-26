package com.code.api.models;

import java.util.List;

public class EnrollmentRequestDTO {
    private String enrollDate;
    private double totalFee;
    private int userid;
    private List<CourseCartItem> items;

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

    public int getUserid() {
        return userid;
    }

    public void setUserid(int userid) {
        this.userid = userid;
    }

    public List<CourseCartItem> getItems() {
        return items;
    }

    public void setItems(List<CourseCartItem> items) {
        this.items = items;
    }
}
