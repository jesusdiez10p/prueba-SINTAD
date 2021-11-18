package com.prueba.desarrollo.dao.ServicioDAO;

import com.prueba.desarrollo.models.Entidad;

import java.util.List;

public interface EntidadDAO {
    List<Entidad> listar();
    void eliminar(Integer id);
    void registrar(Entidad entidad);
    Entidad actualizar(Entidad entidad);
    Entidad findByID(Integer id);
}
