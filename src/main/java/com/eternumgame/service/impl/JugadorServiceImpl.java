package com.eternumgame.service.impl;

import com.eternumgame.controller.mapper.JugadorMapper;
import com.eternumgame.domain.Jugador;
import com.eternumgame.domain.util.UtilidadesHeroes;
import com.eternumgame.persistence.entity.JugadorEntity;
import com.eternumgame.persistence.entity.SessionEntity;
import com.eternumgame.persistence.repository.JugadorRepository;
import com.eternumgame.service.IJugadorService;
import com.eternumgame.service.ISessionPnjService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class JugadorServiceImpl implements IJugadorService {

    @Autowired
    private JugadorMapper jugadorMapper;

    @Autowired
    private JugadorRepository jugadorRepository;

    @Autowired
    private UtilidadesHeroes utilidadesHeroes;

    @Autowired
    private ISessionPnjService sessionPnjService;


    @Override
    public void savePlayer(String personaje, String alias, int numeroJugadores) {

        Jugador jugador = new Jugador();
        JugadorEntity jugadorEntity = new JugadorEntity();
        SessionEntity sessionEntity = new SessionEntity();
        try{
            //Obtenemos código de heroe correspondiente
            String codHeroe = utilidadesHeroes.obtenerCodHeroe(personaje);
            jugador.setCodHeroe(codHeroe);
            jugador.setNivel(0);
            jugador.setDinero(0);
            jugador.setNombrePnj(alias);
            jugadorEntity = jugadorMapper.fromDomainToEntity(jugador);
            // Obtenemos última sessión de juego creada
            sessionEntity = sessionPnjService.findLastEntity();
            // Consultamos si existe o no session de juego creada
            if (null != sessionEntity){
                // Si existe la seteamos a jugador y guardamos
                jugadorEntity.setSession(sessionEntity);
                jugadorRepository.save(jugadorEntity);
            } else {
                // Si no existe, la creamos
                sessionPnjService.saveFirstSession(numeroJugadores);
                sessionEntity = sessionPnjService.findLastEntity();
                jugadorEntity.setSession(sessionEntity);
                jugadorRepository.save(jugadorEntity);
            }

        }catch(Exception e){
            e.printStackTrace();
        }
    }
}
