package com.eternumgame.controller.mapper;

import com.eternumgame.domain.Session;
import com.eternumgame.persistence.entity.SessionEntity;
import org.springframework.stereotype.Component;

@Component
public class SessionMapper {


    public Session fromEntityToDomain (SessionEntity sessionEntity){
        Session session = new Session();
        session.setIdSession(sessionEntity.getIdSession());
        session.setNumPlayers(sessionEntity.getNumPlayers());
        session.setFechaSession(sessionEntity.getFechaSession());
        session.setDinero(sessionEntity.getDinero());
        return session;
    }

    public SessionEntity fromDomainToEntity (Session session){
        SessionEntity sessionEntity = new SessionEntity();
        sessionEntity.setIdSession(session.getIdSession());
        sessionEntity.setNumPlayers(session.getNumPlayers());
        sessionEntity.setFechaSession(session.getFechaSession());
        sessionEntity.setDinero(session.getDinero());
        return sessionEntity;
    }
}
