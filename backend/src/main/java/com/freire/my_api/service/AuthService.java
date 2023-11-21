package com.freire.my_api.service;

import java.sql.Date;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTCreationException;
import com.freire.my_api.DTO.LoginDTO;
import com.freire.my_api.model.UserModel;

import jakarta.security.auth.message.AuthException;

public class AuthService implements UserDetailsService {

    @Autowired
    private UserService userService;

    @Value("${jwt.secret}")
    private String secret;

    @Value("${jwt.issuer}")
    private String issuer;

    public String createToken(LoginDTO loginDTO) throws AuthException {
        try {

            final var anAlgorithm = Algorithm.HMAC256(secret);
            final String aToken = JWT.create()
                    .withIssuer(issuer)
                    .withSubject(loginDTO.getEmail())
                    .withExpiresAt(new Date(new Date(0).getTime() + 24 * 60 * 60 * 1000))
                    .sign(anAlgorithm);
            return aToken;

        } catch (IllegalArgumentException e) {
            throw new AuthException(e.getMessage());
        } catch (JWTCreationException e) {
            throw new AuthException(e.getMessage());
        }
    }

    public String validateToken(String token) {
        try {
            final var anAlgorithm = Algorithm.HMAC256(secret);
            final var decoded = JWT.require(anAlgorithm)
                    .withIssuer(issuer)
                    .build()
                    .verify(token);
            final var anSubject = decoded.getSubject();
            return anSubject;
        } catch (Exception e) {
            return "";
        }
    }

    @Override
    public UserDetails loadUserByUsername(String userEmail) throws UsernameNotFoundException {
        Optional<UserModel> resp = this.userService.FindByEmail(userEmail);
        if (resp.get().getEmail().equals(userEmail)) {
            return resp.get();
        } else {
            throw new UsernameNotFoundException("User not found");
        }
    }

}