package com.freire.my_api.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import com.freire.my_api.model.TransactionModel;
import com.freire.my_api.model.UserModel;

public interface TransactionRepository extends MongoRepository<TransactionModel, String> {
    @Query("{'payer': ?0}")
    List<TransactionModel> GetAllTransactions(UserModel payer);
}