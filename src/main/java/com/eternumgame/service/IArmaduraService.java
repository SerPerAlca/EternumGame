package com.eternumgame.service;

import com.eternumgame.domain.Armadura;
import com.eternumgame.persistence.entity.ArmaduraEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface IArmaduraService {

    public List<Armadura> findAllArmour();

    public void ordenarPorTipo(List<Armadura> armaduraList);

  //  public Armadura getOneArmadura();

    public void modificarRecompensaArray(int[] ides);

    public boolean comprobarEstadoRecompensa(ArmaduraEntity armaduraEntity);

    public boolean modificarEstadoRecompensa(int id);

    public Armadura getArmaduraRecompensa();
}
