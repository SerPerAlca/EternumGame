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
        enemigo.setAgilidad(enemigoEntity.getAgilidad());
        enemigo.setExperiencia(enemigoEntity.getExperiencia());
        enemigo.setRutaImagen(enemigoEntity.getRutaImagen());
        enemigo.setVitalidad(enemigoEntity.getVitalidad());
        enemigo.setProbabilidadAparicion(enemigoEntity.getProbabilidadAparicion());
        return enemigo;
    }

    public EnemigoEntity fromDomainToEnemigoEntity (Enemigo enemigo){
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
        enemigoEntity.setAgilidad(enemigo.getAgilidad());
        enemigoEntity.setExperiencia(enemigo.getExperiencia());
        enemigoEntity.setRutaImagen(enemigo.getRutaImagen());
        enemigoEntity.setProbabilidadAparicion(enemigo.getProbabilidadAparicion());
        return enemigoEntity;
    }
}
