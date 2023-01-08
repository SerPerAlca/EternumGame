package com.eternumgame.service;

import org.springframework.stereotype.Service;

@Service
public interface IJugadorService {

    public void savePlayer (String personaje, String alias, int numeroJugadores);
}
