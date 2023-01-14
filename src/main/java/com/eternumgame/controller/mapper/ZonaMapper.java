package com.eternumgame.controller.mapper;

import com.eternumgame.domain.Enemigo;
import com.eternumgame.domain.Zona;
import com.eternumgame.persistence.entity.EnemigoEntity;
import com.eternumgame.persistence.entity.ZonaEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class ZonaMapper {

    @Autowired
    private EnemigoEntityMapper enemyMapper;

    public Zona EntityToDomain (ZonaEntity zonaEntity){
        Zona zona = new Zona();
        List<Enemigo> enemigoList = new ArrayList<>();
        zona.setIdZona(zonaEntity.getIdZona());
        zona.setNombreZona(zonaEntity.getNombreZona());
        zona.setPeligrosidad(zonaEntity.getPeligrosidad());
        List<EnemigoEntity> listaEntity = zonaEntity.getEnemigoEntityList();
        for (EnemigoEntity enemy : listaEntity){
            Enemigo enemigo = enemyMapper.fromEnemigoEntityToDomain(enemy);
            enemigoList.add(enemigo);
        }
        zona.setEnemigoList(enemigoList);
        return zona;
    }

    public ZonaEntity DomainToEntity (Zona zona){
        ZonaEntity zonaEntity = new ZonaEntity();
        List<EnemigoEntity> enemigoEntityList = new ArrayList<>();
        zonaEntity.setIdZona(zona.getIdZona());
        zonaEntity.setNombreZona(zona.getNombreZona());
        zonaEntity.setPeligrosidad(zona.getPeligrosidad());
        List<Enemigo> enemigoList = zona.getEnemigoList();
        for( Enemigo enemy : enemigoList){
            EnemigoEntity enemigoEntity = enemyMapper.fromDomainToEnemigoEntity(enemy);
            enemigoEntityList.add(enemigoEntity);
        }
        zonaEntity.setEnemigoEntityList(enemigoEntityList);
        return zonaEntity;
    }
}
