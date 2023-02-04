package com.eternumgame.service.impl;

import com.eternumgame.controller.mapper.SessionMapper;
import com.eternumgame.domain.Session;
import com.eternumgame.persistence.entity.SessionEntity;
import com.eternumgame.persistence.repository.SessionPnjRepository;
import com.eternumgame.service.ISessionPnjService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class SessionPnjServiceServiceImpl implements ISessionPnjService {

    @Autowired
    private SessionPnjRepository sessionPnjRepository;

    @Autowired
    private SessionMapper sessionMapper;

    @Override
    public SessionEntity findLastEntity() {
        SessionEntity sessionEntity = new SessionEntity();
        List<SessionEntity> sessionEntityList = new ArrayList<>();
        try {
            sessionEntityList = sessionPnjRepository.findAll();
            if (!sessionEntityList.isEmpty()){
                int id = 1;
                // Obtenemos la última sessión registrada
                for (SessionEntity sessionAux : sessionEntityList){
                    if (id <= sessionAux.getIdSession()){
                        id = sessionAux.getIdSession();
                        sessionEntity = sessionAux;
                    }
                }
            }
        }catch (Exception e){
            e.printStackTrace();
        }
        return sessionEntity;
    }



    @Override
    public void saveFirstSession(int numJugadores) {
        Session session = new Session();
        SessionEntity sessionEntity = new SessionEntity();
        // Seteamos el numero de jugadores
        session.setNumPlayers(numJugadores);
        java.util.Date date = new Date();
        java.sql.Date dataStartSql = new java.sql.Date(date.getTime());
        // Seteamos fecha compatible con DATETIME de sql
        session.setFechaSession(dataStartSql);

        sessionEntity = sessionMapper.fromDomainToEntity(session);
        sessionPnjRepository.save(sessionEntity);
    }

    @Override
    public void ganarDinero(int dinero) {
        SessionEntity sessionEntity = findLastEntity();
        Session session = new Session();
        int dineroActual = sessionEntity.getDinero();
        session.setDinero(dineroActual+dinero);
        sessionEntity.setDinero(session.getDinero());
        sessionPnjRepository.save(sessionEntity);
    }

    @Override
    public void perderDinero(int dinero) {
        SessionEntity sessionEntity = findLastEntity();
        Session session = new Session();
        int dineroActual = sessionEntity.getDinero();
        session.setDinero(dineroActual-dinero);
        sessionEntity.setDinero(session.getDinero());
        sessionPnjRepository.save(sessionEntity);
    }

    @Override
    public void saveSession(SessionEntity sessionEntity) {
        sessionPnjRepository.save(sessionEntity);
    }

}
