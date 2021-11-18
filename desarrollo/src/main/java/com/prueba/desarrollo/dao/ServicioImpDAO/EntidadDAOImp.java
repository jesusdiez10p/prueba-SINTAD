package com.prueba.desarrollo.dao.ServicioImpDAO;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import com.prueba.desarrollo.dao.ServicioDAO.EntidadDAO;
import com.prueba.desarrollo.models.Entidad;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
@Transactional
public class EntidadDAOImp implements EntidadDAO{

    @PersistenceContext
    EntityManager entityManager;
    
    @Override
    @Transactional
    public List<Entidad> listar() {
        String query = "FROM Entidad";
        return entityManager.createQuery(query).getResultList();
    }

    @Override
    public void eliminar(Integer id) {
        Entidad entidad = entityManager.find(Entidad.class, id);
        entityManager.remove(entidad);        
    }

    @Override
    public void registrar(Entidad entidad) { entityManager.merge(entidad); }

    @Override
    public Entidad actualizar(Entidad entidad) {
        return entityManager.merge(entidad);
    }

    @Override
    public Entidad findByID(Integer id) {
        return entityManager.find(Entidad.class, id);
    }
    
}
