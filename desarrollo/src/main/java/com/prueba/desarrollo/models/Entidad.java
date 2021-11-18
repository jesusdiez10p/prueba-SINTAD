package com.prueba.desarrollo.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name="tb_entidad")
public class Entidad {

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Getter @Setter @Column(name="id_entidad")
    private Integer id;
    
    @ManyToOne
    @JoinColumn(name="id_tipo_documento")
    @Getter @Setter
    private Documento documento;

    @Getter @Setter @Column(name="nro_documento")
    private String nroDocumento;

    @Getter @Setter @Column(name="razon_social")
    private String razonSocial;

    @Getter @Setter @Column(name="nombre_comercial")
    private String nombreComercial;

    @ManyToOne
    @JoinColumn(name="id_tipo_contribuyente")
    @Getter @Setter
    private Contribuyente contribuyente;

    @Getter @Setter @Column(name="direccion")
    private String direccion;

    @Getter @Setter @Column(name="telefono")
    private String telefono;

    @Getter @Setter @Column(name="estado")
    private Integer estado;
}
