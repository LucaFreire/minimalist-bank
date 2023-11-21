package com.freire.my_api.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.freire.my_api.DTO.UserDTO;
import com.freire.my_api.model.UserModel;
import com.freire.my_api.service.UserService;

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("")
    public List<UserModel> GetAll() {
        return userService.GetAll();
    }

    @PostMapping("/register")
    public void Register(@RequestBody UserDTO userDTO) {

        UserModel userModel = new UserModel(userDTO);
        userService.Save(userModel);
    }

    @GetMapping("/{email}")
    public Optional<UserModel> GetByName(@PathVariable String email) {
        return userService.FindByEmail(email);
    }

    @GetMapping("/{document}")
    public Optional<UserModel> GetByDocument(@PathVariable String document) {
        return userService.FindByDocument(document);
    }

    @GetMapping("/{id}")
    public Optional<UserModel> GetById(@PathVariable String id) {
        return userService.GetById(id);
    }
}