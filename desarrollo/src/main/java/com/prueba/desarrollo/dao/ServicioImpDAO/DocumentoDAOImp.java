package com.prueba.desarrollo.dao.ServicioImpDAO;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import com.prueba.desarrollo.dao.ServicioDAO.DocumentoDAO;
import com.prueba.desarrollo.models.Documento;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
@Transactional
public class DocumentoDAOImp implements DocumentoDAO{

    @PersistenceContext
    EntityManager entityManager;

        @Override
    @Transactional
    public List<Documento> listar() {
        String query = "FROM Documento";
        return entityManager.createQuery(query).getResultList();
    }

    @Override
    public void eliminar(Integer id) {
        Documento entidad = entityManager.find(Documento.class, id);
        entityManager.remove(entidad);        
    }

    @Override
    public void registrar(Documento entidad) { entityManager.merge(entidad); }

    @Override
    public Documento actualizar(Documento entidad) {
        return entityManager.merge(entidad);
    }

    @Override
    public Documento findByID(Integer id) {
        return entityManager.find(Documento.class, id);
    }
    

}
