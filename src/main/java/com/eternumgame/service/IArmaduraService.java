package com.eternumgame.service;

import com.eternumgame.domain.Armadura;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface IArmaduraService {

    public List<Armadura> findAllArmour();

    public void ordenarPorTipo(List<Armadura> armaduraList);


}
