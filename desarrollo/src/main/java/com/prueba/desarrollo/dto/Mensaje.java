package com.prueba.desarrollo.dto;

import lombok.Getter;
import lombok.Setter;


public class Mensaje {
    
    private String mensaje;

    public Mensaje(String mensaje) {
        this.mensaje = mensaje;
    }
    public String getMensaje() {
        return mensaje;
    }

    public void setMensaje(String mensaje) {
        this.mensaje = mensaje;
    }
}
