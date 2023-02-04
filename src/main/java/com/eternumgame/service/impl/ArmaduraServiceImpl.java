package com.eternumgame.service.impl;

import com.eternumgame.controller.mapper.ArmaduraMapper;
import com.eternumgame.domain.Armadura;
import com.eternumgame.domain.Constantes;
import com.eternumgame.persistence.entity.ArmaduraEntity;
import com.eternumgame.persistence.repository.ArmaduraRepository;
import com.eternumgame.service.IArmaduraService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;

@Service
public class ArmaduraServiceImpl implements IArmaduraService {

    @Autowired
    private ArmaduraRepository armaduraRepository;

    @Autowired
    private ArmaduraMapper mapper;

    @Override
    public List<Armadura> findAllArmour() {
        List<Armadura> armaduraList = new ArrayList<>();
        List<ArmaduraEntity> armaduraEntityList;
        armaduraEntityList = armaduraRepository.findAll();
        for (ArmaduraEntity armour : armaduraEntityList){
            Armadura armadura = mapper.fromArmaduraEntityToDomain(armour);
            armaduraList.add(armadura);
        }
        return armaduraList;
    }

    public void ordenarPorTipo(List<Armadura> armaduraList){
        Collections.sort(armaduraList, new Comparator<Armadura>(){
            public int compare(Armadura p1, Armadura p2){
                return p1.getTipoArmaduraDescripcion().compareTo(p2.getTipoArmaduraDescripcion());
            }
        });
    }

    @Override
    public Armadura getOneArmadura() {
        Armadura armadura = new Armadura();
        int cantidadArmaduras = armaduraRepository.findCount();
        ArmaduraEntity armaduraEntity = new ArmaduraEntity();
        do{
          int indexRandom = (int)(Math.random()*cantidadArmaduras+1);
          armaduraEntity = armaduraRepository.getOne(indexRandom);
        }  while (armaduraEntity.getRecompensa() == 'N');

        armaduraEntity.setRecompensa('N');
        armaduraRepository.save(armaduraEntity);
        armadura = mapper.fromArmaduraEntityToDomain(armaduraEntity);
        armadura.setCantidad(1);
        return armadura;
    }

    @Override
    public void modificarRecompensaArray(int[] ides) {
        for(int i = 0; i < ides.length; i++){
            ArmaduraEntity armaduraEntity = new ArmaduraEntity();
            armaduraEntity = armaduraRepository.findByIdSure(ides[i]);
            if(armaduraEntity.getRecompensa() != Constantes.N){
                armaduraEntity.setRecompensa(Constantes.S);
                armaduraRepository.save(armaduraEntity);
            }
        }
    }

    @Override
    public boolean comprobarEstadoRecompensa(ArmaduraEntity armaduraEntity) {
        if(armaduraEntity.getRecompensa() != Constantes.N){
            return true;
        }
        return false;
    }

    @Override
    public boolean modificarEstadoRecompensa(int id) {
        ArmaduraEntity armaduraEntity = new ArmaduraEntity();
        armaduraEntity = armaduraRepository.getOne(id);
        if(comprobarEstadoRecompensa(armaduraEntity)) {
            armaduraEntity.setRecompensa(Constantes.N);
            return true;
        }
        return false;
    }
}
