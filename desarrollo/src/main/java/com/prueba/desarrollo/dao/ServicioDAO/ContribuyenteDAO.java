package com.prueba.desarrollo.dao.ServicioDAO;

import com.prueba.desarrollo.models.Contribuyente;
import java.util.List;

public interface ContribuyenteDAO {
    List<Contribuyente> listar();
    void eliminar(Integer id);
    void registrar(Contribuyente entidad);
    Contribuyente actualizar(Contribuyente entidad);
    Contribuyente findByID(Integer id);
}
