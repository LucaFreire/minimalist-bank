package com.freire.my_api.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.freire.my_api.model.UserModel;
import com.freire.my_api.repository.UserRepository;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public UserModel Save(UserModel userModel) {
        return this.userRepository.save(userModel);
    }

    public List<UserModel> GetAll() {
        return this.userRepository.findAll();
    }

    public UserModel FindByEmail(String email) {
        return this.userRepository.FindByEmail(email);
    }

    public UserModel FindByDocument(String document) {
        return this.userRepository.FindByDocument(document);
    }

    public void DeleteById(String id) {
        this.userRepository.deleteById(id);
    }

    public Optional<UserModel> GetById(String id) {

        if (id == null)
            throw new IllegalArgumentException();

        return this.userRepository.findById(id);
    }

    

}