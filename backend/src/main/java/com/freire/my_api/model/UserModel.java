package com.freire.my_api.model;

import java.math.BigDecimal;
import java.sql.Date;
import java.time.LocalDate;
import java.util.Collection;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.freire.my_api.DTO.UserDTO;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
@Document("user")
public class UserModel implements UserDetails {

    @Id
    private String id;
    private String name;
    private String email;
    private String document;
    private Double balance = 0d;
    private LocalDate birthDate;
    private String password;

    public UserModel() {}

    public UserModel(String name, String password, String email, String document, BigDecimal balance, LocalDate birthDate) {
        this.name = name;
        this.email = email;
        this.document = document;
        this.password = password;
        this.birthDate = birthDate;
    }

    public UserModel(UserDTO userDTO){
        this.name = userDTO.getFullName();
        this.password = userDTO.getPassword();
        this.birthDate = userDTO.getBirthDate();
        this.email = userDTO.getEmail();
        this.document = userDTO.getDocument();
    }

    public UserModel(String id) {
        this.id = id;
    }

    public void AddMoney(Double money) {
        this.balance += money;
    }

    public void SubtractMoney(Double money) {
        this.balance -= money;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'getAuthorities'");
    }

    @Override
    public String getUsername() {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'getUsername'");
    }

    @Override
    public boolean isAccountNonExpired() {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'isAccountNonExpired'");
    }

    @Override
    public boolean isAccountNonLocked() {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'isAccountNonLocked'");
    }

    @Override
    public boolean isCredentialsNonExpired() {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'isCredentialsNonExpired'");
    }

    @Override
    public boolean isEnabled() {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'isEnabled'");
    }
}