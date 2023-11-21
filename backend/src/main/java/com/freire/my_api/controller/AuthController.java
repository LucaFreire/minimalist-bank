package com.freire.my_api.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.freire.my_api.DTO.LoginDTO;
import com.freire.my_api.service.AuthService;
import com.freire.my_api.service.UserService;

import jakarta.security.auth.message.AuthException;

@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private UserService userService;

    @Autowired
    private AuthService authService;

    @PostMapping("/login")
    public String Login(@RequestBody LoginDTO loginDTO) throws AuthException {
        var resp = this.userService.FindByEmail(loginDTO.getEmail());
        if (resp != null) {
            if (resp.get().getPassword().equals(loginDTO.getPassword())) {
                return authService.createToken(loginDTO);
            }
            return "Senha incorreta";
        }
        return "Usuário não encontrado";
    }

}
