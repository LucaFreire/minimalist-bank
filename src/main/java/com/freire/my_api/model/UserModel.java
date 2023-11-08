package com.freire.my_api.model;

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

    public UserModel(String name, String email, String document, short age) {
        this.name = name;
        this.email = email;
        this.document = document;
        this.age = age;
    }
}
