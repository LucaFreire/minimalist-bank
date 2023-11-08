package com.freire.my_api.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import com.freire.my_api.model.UserModel;

public interface UserRepository extends MongoRepository<UserModel, String> {

    @Query("{'email': ?0}")
    UserModel FindByEmail(String email);
    
    @Query("{'document': ?0}")
    UserModel FindByDocument(String document);
}