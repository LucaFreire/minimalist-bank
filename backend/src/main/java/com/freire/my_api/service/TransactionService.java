package com.freire.my_api.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.freire.my_api.model.TransactionModel;
import com.freire.my_api.repository.TransactionRepository;

@Service
public class TransactionService {
 
    @Autowired
    private TransactionRepository transactionRepository;

    public TransactionModel Save(TransactionModel transactionModel) {
        return this.transactionRepository.save(transactionModel);
    }

    public List<TransactionModel> GetAll() {
        return this.transactionRepository.findAll();
    }

    public void DeleteById(String id) {
        this.transactionRepository.deleteById(id);
    }

    public Optional<TransactionModel> GetById(String id) {

        if (id == null)
            throw new IllegalArgumentException();

        return this.transactionRepository.findById(id);
    } 
}
