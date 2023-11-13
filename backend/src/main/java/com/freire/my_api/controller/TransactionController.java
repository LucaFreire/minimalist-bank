package com.freire.my_api.controller;

import java.math.BigDecimal;
import java.util.List;
import java.util.Optional;

import org.bson.types.Decimal128;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.freire.my_api.DTO.TransactionDTO;
import com.freire.my_api.model.TransactionModel;
import com.freire.my_api.model.UserModel;
import com.freire.my_api.service.TransactionService;
import com.freire.my_api.service.UserService;

@RestController
@RequestMapping("/transaction")
public class TransactionController {

    @Autowired
    private TransactionService transactionService;

    @Autowired
    private UserService userService;

    @GetMapping("")
    public List<TransactionModel> GetAll() {
        return transactionService.GetAll();
    }

    @PostMapping("/transaction")
    public void Transaction(TransactionDTO transactionDTO) {

        UserModel payer = userService.GetById(transactionDTO.getPayerID()).get();
        UserModel payee;
        Double transactionValue = transactionDTO.getValue(); 

        String payeeData = transactionDTO.getPayeeAnyIdentifier();

        if (payeeData.contains("@")) {
            payee = userService.FindByEmail(payeeData);
        } else {
            payee = userService.FindByDocument(payeeData);
        }

        payee.AddMoney(transactionValue);
        payer.SubtractMoney(transactionValue);

        
        TransactionModel transactionModel = new TransactionModel(payee, payer);
        
        userService.Update(payee);
        userService.Update(payer);
        transactionService.Save(transactionModel);
    }

    @PostMapping("/delete")
    public void DeleteById(String id) {
        transactionService.DeleteById(id);
    }

    @GetMapping("/{id}")
    public void GetById(String id) {
        transactionService.GetById(id);
    }
}
