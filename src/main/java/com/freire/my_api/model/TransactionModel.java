package com.freire.my_api.model;

import java.sql.Date;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
@Document("transaction")
public class TransactionModel {

    @Id
    private String id;
    @DBRef
    private UserModel payee;
    @DBRef
    private UserModel payer;
    private Date date;

    public TransactionModel(UserModel payee, UserModel payer) {
        this.payee = payee;
        this.payer = payer;
    }
}
