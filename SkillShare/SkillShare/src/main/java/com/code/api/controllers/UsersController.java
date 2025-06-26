package com.code.api.controllers;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.code.api.models.Users;
import com.code.api.services.IUsersService;

@RestController
@RequestMapping("api/users/")
public class UsersController {

    @Autowired
    IUsersService userService;

    @GetMapping(value="/")
    public List<Users> getAllUsers() {
        return userService.getAll();
    }

    @GetMapping(value="/{id}")
    public Users getUsersById(@PathVariable("id") int id) {
        return userService.getUserById(id);
    }

    @PostMapping(value="login")
    public Users userLogin(@RequestBody Map<String, String> credentials) {
        String emailid = credentials.get("emailid");
        String password = credentials.get("password");
        return userService.validateUsers(emailid, password);
    }

    @PostMapping(value="create")
    public Users userCreate(@RequestBody Users users) {
        return userService.createUsers(users);
    }

    @PutMapping(value="edit")
    public Users userEdit(@RequestBody Users users) {
        return userService.updateUsers(users);
    }
    
    @DeleteMapping(value="delete/{id}")
    public String userDelete(@PathVariable("id") int id) {
        return userService.deleteUsers(id);
    }
}
