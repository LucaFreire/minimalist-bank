package com.freire.my_api.controller;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.freire.my_api.DTO.TransactionDTO;
import com.freire.my_api.model.TransactionModel;
import com.freire.my_api.model.UserModel;
import com.freire.my_api.service.AuthService;
import com.freire.my_api.service.TransactionService;
import com.freire.my_api.service.UserService;

@RestController
@RequestMapping("/transaction")
public class TransactionController {

    @Autowired
    private TransactionService transactionService;

    @Autowired
    private UserService userService;
    
    @Autowired
    private AuthService authService;

    @GetMapping("")
    public List<TransactionModel> GetAll() {
        return transactionService.GetAll();
    }

    @PostMapping("/transaction")
    public void Transaction(TransactionDTO transactionDTO) throws IOException {

        var email = authService.validateToken(transactionDTO.getToken());
        
        if(email.isBlank())
            throw new IOException("token is not valid");
        
        UserModel payer = userService.FindByEmail(email).get();
        
        Optional<UserModel> payee;
        Double transactionValue = transactionDTO.getValue(); 

        String payeeData = transactionDTO.getPayeeAnyIdentifier();

        if (payeeData.contains("@")) {
            payee = userService.FindByEmail(payeeData);
        } else {
            payee = userService.FindByDocument(payeeData);
        }

        if(!payee.isPresent())
            throw new IOException("payee's email or document is not valid");

        payee.get().AddMoney(transactionValue);
        payer.SubtractMoney(transactionValue);
        
        TransactionModel transactionModel = new TransactionModel(payee.get(), payer);
        
        userService.Update(payee.get());
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
