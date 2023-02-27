package com.eternumgame.service.impl;

import com.eternumgame.controller.mapper.ArmaMapper;
import com.eternumgame.domain.Arma;
import com.eternumgame.domain.Constantes;
import com.eternumgame.persistence.entity.ArmaEntity;
import com.eternumgame.persistence.repository.ArmaRepository;
import com.eternumgame.service.IArmaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;

@Service
public class ArmaServiceImpl implements IArmaService {

    @Autowired
    private ArmaRepository armaRepository;

    @Autowired
    private ArmaMapper armaMapper;


    @Override
    public List<Arma> findAllWeapon() {
        List<Arma> armaList = new ArrayList<>();
        List<ArmaEntity> armaEntityList;
        armaEntityList = armaRepository.findAll();
        for (ArmaEntity weapon : armaEntityList){
            Arma arma = armaMapper.fromEntitytoDomain(weapon);
            armaList.add(arma);
        }
        return armaList;
    }

    public void ordenarPorTipo(List<Arma> armaList){
        Collections.sort(armaList, new Comparator<Arma>(){
            public int compare(Arma p1, Arma p2){
                return p1.getTipoArmaDescripcion().compareTo(p2.getTipoArmaDescripcion());
            }
        });
    }
/*
   @Override
    public Arma getOneArma() {
        Arma arma = new Arma();
        int cantidadArmas = armaRepository.findCount();
        ArmaEntity armaEntity = new ArmaEntity();
        do{
            int indexRandom = (int)(Math.random()*cantidadArmas+1);
            armaEntity = armaRepository.getOne(indexRandom);
        // mientras que sea una arma de recompensa y no se haya obtenido antes
        } while (armaEntity.getRecompensa() == Constantes.S &&
                    armaEntity.getObtenida() != Constantes.S);

        // Le seteamos el valor de recompensa para que no vuelva a salir
        armaEntity.setRecompensa('N');
        armaRepository.save(armaEntity);

        arma = armaMapper.fromEntitytoDomain(armaEntity);
        // Declaramos que solo devolvemos una
        arma.setCantidad(1);

        return arma;
    }
*/
    public Arma getArmaRecompensa(){
        Arma arma = new Arma();
        ArmaEntity armaEntity = new ArmaEntity();
        int armasDisponibles = armaRepository.findCountDisponibles();
        if(armasDisponibles > 0){
            do{
                int indexRandom = (int) (Math.random() * armasDisponibles + 1);
                armaEntity = armaRepository.getOne(indexRandom);
            } while (armaEntity.getRecompensa() != Constantes.S &&
                        armaEntity.getObtenida() == Constantes.S);
            armaEntity.setObtenida(Constantes.S);
            armaRepository.save(armaEntity);
            arma = armaMapper.fromEntitytoDomain(armaEntity);
            arma.setCantidad(1);
            return arma;
        } else{
            return null;
        }
    }

    @Override
    public void modificarRecompensaArray(int[] ids) {
        for(int i=0; i < ids.length; i++){
            ArmaEntity armaEntity = new ArmaEntity();
            armaEntity = armaRepository.findByIdSure(ids[i]);
            if (armaEntity.getRecompensa() != Constantes.N){
                armaEntity.setRecompensa(Constantes.S);
                armaRepository.save(armaEntity);
            }
        }
    }

    @Override
    public boolean comprobarEstadoRecompensa(ArmaEntity armaEntity) {
        if(armaEntity.getObtenida() != Constantes.N){
            return false;
        }
        return true;
    }

    @Override
    public boolean modificarEstadoRecompensa(int id) {
        ArmaEntity armaEntity = new ArmaEntity();
        armaEntity = armaRepository.getOne(id);
        if(comprobarEstadoRecompensa(armaEntity)) {
            armaEntity.setObtenida(Constantes.S);
            return true;
        }
        return false;
    }


}
