package com.freire.my_api.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import com.freire.my_api.model.TransactionModel;

public interface TransactionRepository extends MongoRepository<TransactionModel, String> {

    @Query("'$or': [ { 'payee': ?0 }, { 'payer': ?0 } ]")
    List<TransactionModel> GetAllTransactions(String id);
}