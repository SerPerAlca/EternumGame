package com.eternumgame.service;

import com.eternumgame.domain.Arma;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface IArmaService {

    public List<Arma> findAllWeapon();

    public void ordenarPorTipo(List<Arma> armaList);

    public Arma getOneArma();

    /*  Long count();
    Page<Arma> findRandom(SpringDataWebProperties.Pageable pageable);
    */
}
