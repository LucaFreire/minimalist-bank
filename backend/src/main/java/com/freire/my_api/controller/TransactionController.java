package com.freire.my_api.controller;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
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

    @GetMapping("/getAll/{token}")
    public List<TransactionModel> GetAllByToken(@PathVariable String token) throws IOException {

        String email = authService.validateToken(token);
        if(email.isBlank())
            throw new IOException("jwt is not valid");

        Optional<UserModel> user = userService.FindByEmail(email);

        if(!user.isPresent())
            throw new IOException("email is not valid");

        return transactionService.GetAllTransactions(user.get());
    }

    @PostMapping("/transaction")
    public void Transaction(@RequestBody TransactionDTO transactionDTO) throws IOException {

        System.out.println("transactionDTO" +transactionDTO);
        System.out.println(transactionDTO.getToken());
        System.out.println(transactionDTO.getPayeeAnyIdentifier());
        System.out.println(transactionDTO.getValue());

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

        if(payee.get() == null)
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
