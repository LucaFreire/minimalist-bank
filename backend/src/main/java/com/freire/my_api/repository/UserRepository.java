package com.freire.my_api.repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import com.freire.my_api.model.UserModel;

public interface UserRepository extends MongoRepository<UserModel, String> {

    @Query("{'email': ?0}")
    Optional<UserModel> FindByEmail(String email);
    
    @Query("{'document': ?0}")
    Optional<UserModel> FindByDocument(String document);
}