package com.eternumgame.controller.mapper;

import com.eternumgame.domain.Enemigo;
import com.eternumgame.persistence.entity.EnemigoEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class EnemigoEntityMapper {

    @Autowired
    private ZonaMapper zonaMapper;

    public Enemigo fromEnemigoEntityToDomain (EnemigoEntity enemigoEntity){
       // List<Zona> zonaList = new ArrayList<>();
        Enemigo enemigo = new Enemigo();
        enemigo.setIdEnemigo(enemigoEntity.getIdEnemigo());
        enemigo.setNombreEnemigo(enemigoEntity.getNombreEnemigo());
        enemigo.setRaza(enemigoEntity.getRaza());
        enemigo.setAtaqueFisico(enemigoEntity.getAtaqueFisico());
        enemigo.setAtaqueMagico(enemigoEntity.getAtaqueMagico());
        enemigo.setDefensaFisica(enemigoEntity.getDefensaFisica());
        enemigo.setDefensaMagica(enemigoEntity.getDefensaMagica());
        enemigo.setIs_boss(enemigoEntity.getIs_boss());
        enemigo.setAlcance(enemigoEntity.getAlcance());
        enemigo.setVelocidad(enemigoEntity.getVelocidad());
        enemigo.setEsquiva(enemigoEntity.getEsquiva());
        enemigo.setRutaImagen(enemigoEntity.getRutaImagen());
        enemigo.setVitalidad(enemigoEntity.getVitalidad());
      /*  List<ZonaEntity> zonaEntityList = enemigoEntity.getZonaEntityList();
        for ( ZonaEntity zonaEntity : zonaEntityList){
            Zona zona = zonaMapper.EntityToDomain(zonaEntity);
            zonaList.add(zona);
        }
        enemigo.setZonaEntityList(zonaList); */
        enemigo.setProbabilidadAparicion(enemigoEntity.getProbabilidadAparicion());
        return enemigo;
    }

    public EnemigoEntity fromDomainToEnemigoEntity (Enemigo enemigo){
     //   List<ZonaEntity> zonaEntityList = new ArrayList<>();
        EnemigoEntity enemigoEntity = new EnemigoEntity();
        enemigoEntity.setIdEnemigo(enemigo.getIdEnemigo());
        enemigoEntity.setRaza(enemigo.getRaza());
        enemigoEntity.setAtaqueFisico(enemigo.getAtaqueFisico());
        enemigoEntity.setAtaqueMagico(enemigo.getAtaqueMagico());
        enemigoEntity.setDefensaFisica(enemigo.getDefensaFisica());
        enemigoEntity.setDefensaMagica(enemigo.getDefensaMagica());
        enemigoEntity.setIs_boss(enemigo.getIs_boss());
        enemigoEntity.setAlcance(enemigo.getAlcance());
        enemigoEntity.setVelocidad(enemigo.getVelocidad());
        enemigoEntity.setEsquiva(enemigo.getEsquiva());
        enemigoEntity.setRutaImagen(enemigo.getRutaImagen());
    /*    List<Zona> zonaList = enemigo.getZonaEntityList();
        for (Zona zona : zonaList){
            ZonaEntity zonaEntity = zonaMapper.DomainToEntity(zona);
            zonaEntityList.add(zonaEntity);
        }
        enemigoEntity.setZonaEntityList(zonaEntityList); */
        enemigoEntity.setProbabilidadAparicion(enemigo.getProbabilidadAparicion());
        return enemigoEntity;
    }
}
