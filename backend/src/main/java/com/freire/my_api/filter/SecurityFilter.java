package com.freire.my_api.filter;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.filter.OncePerRequestFilter;

import com.freire.my_api.service.AuthService;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

public class SecurityFilter extends OncePerRequestFilter {

    @Autowired
    private AuthService authService;

    @Override
    protected void doFilterInternal(final HttpServletRequest request,
            final HttpServletResponse response,
            final FilterChain filterChain)
            throws ServletException, IOException {

        final var anAuthToken = request.getHeader("Authorization");

        if (anAuthToken != null) {

            final var aToken = anAuthToken.replace("Bearer ", "");

            final var anUsername = this.authService.validateToken(aToken);

            final var anUser = this.authService.loadUserByUsername(anUsername);

            final var auth = new UsernamePasswordAuthenticationToken(anUser,
                    null,
                    anUser.getAuthorities());

            SecurityContextHolder.getContext().setAuthentication(auth);
        }
        filterChain.doFilter(request, response);
    }

}
