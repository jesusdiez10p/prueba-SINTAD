package com.prueba.desarrollo.dao.ServicioImpDAO;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import com.prueba.desarrollo.dao.ServicioDAO.ContribuyenteDAO;
import com.prueba.desarrollo.models.Contribuyente;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
@Transactional
public class ContribuyenteDAOImp implements ContribuyenteDAO{

    @PersistenceContext
    EntityManager entityManager;

    @Override
    @Transactional
    public List<Contribuyente> listar() {
        String query = "FROM Contribuyente";
        return entityManager.createQuery(query).getResultList();
    }

    @Override
    public void eliminar(Integer id) {
        Contribuyente contribuyente = entityManager.find(Contribuyente.class, id);
        entityManager.remove(contribuyente);        
    }

    @Override
    public void registrar(Contribuyente entidad) { entityManager.merge(entidad); }

    @Override
    public Contribuyente actualizar(Contribuyente entidad) { return entityManager.merge(entidad);}

    @Override
    public Contribuyente findByID(Integer id) {
        return entityManager.find(Contribuyente.class, id);
    }
    
}
