package com.eternumgame.service.impl;

import com.eternumgame.controller.mapper.ArmaMapper;
import com.eternumgame.domain.Arma;
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

    @Override
    public Arma getOneArma() {
        Arma arma = new Arma();
        int cantidadArmas = armaRepository.findCount();
        ArmaEntity armaEntity = new ArmaEntity();
        do{
            int indexRandom = (int)(Math.random()*cantidadArmas+1);
            armaEntity = armaRepository.getOne(indexRandom);
/* Si el valor Recompensa es igual a 'N' repetimos el proceso (Esto significa que el objeto ya ha sido obtenido como recompensa) */
        } while (armaEntity.getRecompensa() == 'N');

        // Le seteamos el valor de recompensa para que no vuelva a salir
        armaEntity.setRecompensa('N');
        armaRepository.save(armaEntity);

        arma = armaMapper.fromEntitytoDomain(armaEntity);
        // Declaramos que solo devolvemos una
        arma.setCantidad(1);

        return arma;
    }



}
