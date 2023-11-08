package com.freire.my_api.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.freire.my_api.model.TransactionModel;

public interface TransactionRepository extends MongoRepository<TransactionModel, String> {
    
}
