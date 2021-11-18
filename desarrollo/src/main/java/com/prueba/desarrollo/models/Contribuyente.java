package com.prueba.desarrollo.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name="tb_tipo_contribuyente")
public class Contribuyente {
    
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Getter @Setter @Column(name ="id_tipo_contribuyente")
    private Integer id;
    @Getter @Setter @Column(name ="nombre")
    private String nombre;
    @Getter @Setter @Column(name ="codigo")
    private String codigo;
    @Getter @Setter @Column(name ="estado")
    private Integer estado;
}
