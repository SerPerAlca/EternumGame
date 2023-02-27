package com.eternumgame.service;

import com.eternumgame.domain.Arma;
import com.eternumgame.persistence.entity.ArmaEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface IArmaService {

    public List<Arma> findAllWeapon();

    public void ordenarPorTipo(List<Arma> armaList);

   // public Arma getOneArma();

    public void modificarRecompensaArray(int[] ids);

    public boolean comprobarEstadoRecompensa(ArmaEntity armaEntity);

    public boolean modificarEstadoRecompensa(int id);

    public Arma getArmaRecompensa();
}
