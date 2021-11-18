package com.prueba.desarrollo.security.dto;

import lombok.NonNull;

public class LoginUsuario {
    @NonNull
    private String nombreUsuario;
    @NonNull
    private String password;

    public String getNombreUsuario() {
        return nombreUsuario;
    }

    public void setNombreUsuario(String nombreUsuario) {
        this.nombreUsuario = nombreUsuario;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
