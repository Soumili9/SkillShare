package com.code.api.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.code.api.models.Category;
import com.code.api.repositories.ICategoryRepository;

@Service
public class CategoryService implements ICategoryService {

    @Autowired
    ICategoryRepository categoryRepo;

    @Override
    public Category creatCategory(Category category) {
        return categoryRepo.save(category);
    }

    @Override
    public Category updateCategory(Category category) {
        return categoryRepo.save(category);
    }

    @Override
    public String deleteCategory(int id) {
        Optional<Category> category = categoryRepo.findById(id);
        if (category.isPresent()) {
            categoryRepo.delete(category.get());
            return "Category is deleted Successfully";
        }
        return "Category with " + id + " not found";
    }

    @Override
    public Category getCategorytById(int id) {
        return categoryRepo.findById(id).get();
    }

    @Override
    public List<Category> getAllCategory() {
        return categoryRepo.findAll();
    }
}
