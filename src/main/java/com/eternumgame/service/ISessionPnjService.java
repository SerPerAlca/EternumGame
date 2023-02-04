package com.eternumgame.service;

import com.eternumgame.persistence.entity.SessionEntity;
import org.springframework.stereotype.Service;

@Service
public interface ISessionPnjService {

    public SessionEntity findLastEntity();

    public void saveFirstSession(int numJugadores);

    public void ganarDinero(int dinero);

    public void perderDinero(int dinero);

    public void saveSession(SessionEntity sessionEntity);
}
