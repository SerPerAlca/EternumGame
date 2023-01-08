package com.eternumgame.service;

import com.eternumgame.persistence.entity.SessionEntity;
import org.springframework.stereotype.Service;

@Service
public interface ISessionPnjService {

    public SessionEntity findLastEntity();

    public void saveSession(int numJugadores);
}
