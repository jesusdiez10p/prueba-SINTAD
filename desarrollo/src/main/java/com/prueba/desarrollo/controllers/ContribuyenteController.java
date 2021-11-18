package com.prueba.desarrollo.controllers;

import com.prueba.desarrollo.dao.ServicioDAO.ContribuyenteDAO;
import com.prueba.desarrollo.models.*;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class ContribuyenteController {
    @Autowired
    private ContribuyenteDAO contribuyenteDAO;


    @RequestMapping(value = "api/contribuyentes", method = RequestMethod.GET)
    public List<Contribuyente>getContribuyentes(){
        return contribuyenteDAO.listar();
    }

    
    @RequestMapping(value = "api/contribuyentes", method = RequestMethod.POST)
    public void registrarContribuyente(@RequestBody Contribuyente contribuyente){
        contribuyenteDAO.registrar(contribuyente);
    }

    @RequestMapping(value = "api/contribuyentes/{id}", method = RequestMethod.DELETE)
    public void eliminarContribuyente(@PathVariable Integer id){
        contribuyenteDAO.eliminar(id);
    }

    @RequestMapping(value = "api/contribuyentes/{id}", method = RequestMethod.GET)
    public Contribuyente getContribuyente(@PathVariable Integer id){
        return contribuyenteDAO.findByID(id);
    }

    @RequestMapping(value = "api/contribuyentes", method = RequestMethod.PUT)
    public Contribuyente actualizarContribuyente(@RequestBody Contribuyente contribuyente){
        return contribuyenteDAO.actualizar(contribuyente);
    }
}
