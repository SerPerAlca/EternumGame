package com.eternumgame.controller.mapper;

import com.eternumgame.domain.Jugador;
import com.eternumgame.domain.Session;
import com.eternumgame.persistence.entity.JugadorEntity;
import com.eternumgame.persistence.entity.SessionEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class JugadorMapper {

    @Autowired
    private SessionMapper sessionMapper;

    public Jugador fromEntityToDomain (JugadorEntity jugadorEntity){
        Jugador jugador = new Jugador();
        jugador.setIdPnj(jugadorEntity.getIdPnj());
        jugador.setCodHeroe(jugadorEntity.getCodHeroe());
        jugador.setNivel(jugadorEntity.getNivel());
        jugador.setDinero(jugadorEntity.getDinero());
        jugador.setNombrePnj(jugadorEntity.getNombrePnj());
        if (null != jugadorEntity.getSession()){
            SessionEntity sessionEntity = jugadorEntity.getSession();
            Session session = sessionMapper.fromEntityToDomain(sessionEntity);
            jugador.setSession(session);
        }
        return jugador;
    }

    public JugadorEntity fromDomainToEntity (Jugador jugador){
        JugadorEntity jugadorEntity = new JugadorEntity();
        jugadorEntity.setIdPnj(jugador.getIdPnj());
        jugadorEntity.setCodHeroe(jugador.getCodHeroe());
        jugadorEntity.setNivel(jugador.getNivel());
        jugadorEntity.setDinero(jugador.getDinero());
        jugadorEntity.setNombrePnj(jugador.getNombrePnj());
        if (null != jugador.getSession()){
            Session session = jugador.getSession();
            SessionEntity sessionEntity = sessionMapper.fromDomainToEntity(session);
            jugadorEntity.setSession(sessionEntity);
        }
        return jugadorEntity;
    }

}
