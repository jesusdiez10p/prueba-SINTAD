package com.prueba.desarrollo.controllers;

import java.util.List;

import com.prueba.desarrollo.dao.ServicioDAO.EntidadDAO;
import com.prueba.desarrollo.models.*;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class EntidadController {
    
    @Autowired
    private EntidadDAO entidadDao;

    @RequestMapping(value = "api/entidades", method = RequestMethod.GET)
    public List<Entidad> getEntidades(){
        return entidadDao.listar();
    }

    @RequestMapping(value = "api/entidades", method = RequestMethod.POST)
    public void registrarEntidad(@RequestBody Entidad entidad){
        entidadDao.registrar(entidad);
    }

    @RequestMapping(value = "api/entidades/{id}", method = RequestMethod.DELETE)
    public void eliminarEntidad(@PathVariable Integer id){
        entidadDao.eliminar(id);
    }

    @RequestMapping(value = "api/entidades/{id}", method = RequestMethod.GET)
    public Entidad getEntidad(@PathVariable Integer id){
        return entidadDao.findByID(id);
    }

    @RequestMapping(value = "api/entidades", method = RequestMethod.PUT)
    public Entidad actualizarEntidad(@RequestBody Entidad entidad){ 
        return entidadDao.actualizar(entidad);
    }
    
}