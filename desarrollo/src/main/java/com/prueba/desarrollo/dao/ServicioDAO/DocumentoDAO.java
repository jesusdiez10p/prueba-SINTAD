package com.prueba.desarrollo.dao.ServicioDAO;

import java.util.List;
import com.prueba.desarrollo.models.Documento;

public interface DocumentoDAO {
    List<Documento> listar();
    void eliminar(Integer id);
    void registrar(Documento entidad);
    Documento actualizar(Documento entidad);
    Documento findByID(Integer id);
}
