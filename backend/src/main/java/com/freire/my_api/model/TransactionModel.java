package com.freire.my_api.model;

import java.time.LocalDate;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.val;

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

    private Double value;
    private LocalDate date;

    public TransactionModel(UserModel payee, UserModel payer, Double value ) {
        this.payee = payee;
        this.payer = payer;
        this.value = value;
        this.date = java.time.LocalDate.now();
    }

    public TransactionModel() {
    }

}
