package com.code.api.services;

import java.util.List;
import com.code.api.models.Category;

public interface ICategoryService {
    public Category creatCategory(Category category);
    public Category updateCategory(Category category);
    public String deleteCategory(int id);
    public Category getCategorytById(int id);
    public List<Category> getAllCategory();
}
