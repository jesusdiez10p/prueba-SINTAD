package com.prueba.desarrollo.controllers;

import com.prueba.desarrollo.dao.ServicioDAO.DocumentoDAO;
import com.prueba.desarrollo.models.*;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class DocumentoController {
    @Autowired
    private DocumentoDAO documentoDAO;

    @Autowired


    @RequestMapping(value = "api/documentos", method = RequestMethod.GET)
    public List<Documento> getDocumentos(){
        return documentoDAO.listar();
    }

    @RequestMapping(value = "api/documentos", method = RequestMethod.POST)
    public void registrarDocumento(@RequestBody Documento documento){
        documentoDAO.registrar(documento);
    }

    @RequestMapping(value = "api/documentos/{id}", method = RequestMethod.DELETE)
    public void eliminarDocumento(@PathVariable Integer id){
        documentoDAO.eliminar(id);
    }

    @RequestMapping(value = "api/documentos/{id}", method = RequestMethod.GET)
    public Documento getDocumento(@PathVariable Integer id){
        return documentoDAO.findByID(id);
    }

    @RequestMapping(value = "api/documentos", method = RequestMethod.PATCH)
    public Documento actualizarDocumento(@RequestBody Documento documento){
        return documentoDAO.actualizar(documento);
    }
}