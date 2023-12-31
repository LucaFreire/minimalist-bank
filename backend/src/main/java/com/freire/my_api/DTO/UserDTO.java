package com.freire.my_api.DTO;

import java.time.LocalDate;

import lombok.Data;

@Data
public class UserDTO {
    String fullName;
    LocalDate birthDate;
    String password;
    String document;
    String email;

    public UserDTO(String fullName, LocalDate birthDate, String password, String document, String email) {
        this.fullName = fullName;
        this.birthDate = birthDate;
        this.password = password;
        this.document = document;
        this.email = email;
    }
}