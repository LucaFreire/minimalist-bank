package com.freire.my_api.model;

import java.math.BigDecimal;
import java.sql.Date;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
@AllArgsConstructor
@Document("user")
public class UserModel {

    @Id
    private String id;
    private String name;
    private String email;
    private String document;
    private short age;
    private Double balance = 0d;
    private Date birthDate;

    public UserModel(String name, String email, String document, short age, BigDecimal balance, Date birthDate) {
        this.name = name;
        this.email = email;
        this.document = document;
        this.age = age;
        this.birthDate = birthDate;
    }
}
