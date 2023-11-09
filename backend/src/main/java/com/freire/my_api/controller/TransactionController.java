package com.freire.my_api.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.freire.my_api.model.TransactionModel;
import com.freire.my_api.service.TransactionService;

@RestController
@RequestMapping("/transaction")
public class TransactionController {
    
    @Autowired
    private TransactionService transactionService;

    @GetMapping("")
    public List<TransactionModel> GetAll() {
        return transactionService.GetAll();
    }

    @PostMapping("/register")
    public void Register(TransactionModel transactionModel){
        transactionService.Save(transactionModel);
    }

    @PostMapping("/delete")
    public void DeleteById(String id){
        transactionService.DeleteById(id);
    }
    
    @GetMapping("/{id}")
    public void GetById(String id){
        transactionService.GetById(id);
    }
}
