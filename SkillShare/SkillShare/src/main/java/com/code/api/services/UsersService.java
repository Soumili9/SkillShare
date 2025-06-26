package com.code.api.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.code.api.models.Users;
import com.code.api.repositories.IUsersRepository;

@Service
public class UsersService implements IUsersService {

    @Autowired
    IUsersRepository usersrepository;

    @Override
    public Users createUsers(Users user) {
        Users existing = usersrepository.findByEmailid(user.getEmailid());
        if (existing != null) {
            throw new RuntimeException("User with this email already exists.");
        }
        return usersrepository.save(user);
    }

    @Override
    public Users updateUsers(Users user) {
        return usersrepository.save(user);
    }

    @Override
    public String deleteUsers(Users user) {
        usersrepository.delete(user);
        return "User is deleted Successfully";
    }

    @Override
    public String deleteUsers(int id) {
        Optional<Users> u = usersrepository.findById(id);
        if (u.isPresent()) {
            usersrepository.delete(u.get());
            return "User is deleted Successfully";
        }
        return "User is not found with ID:" + id;
    }

    @Override
    public Users getUserById(int id) {
        return usersrepository.findById(id).get();
    }

    @Override
    public List<Users> getAll() {
        return usersrepository.findAll();
    }

    @Override
    public Users validateUsers(String emailid, String password) {
        Users user = usersrepository.findByEmailid(emailid);
        if (user != null && user.getPassword().equals(password)) {
            return user;
        }
        return null;
    }
}
