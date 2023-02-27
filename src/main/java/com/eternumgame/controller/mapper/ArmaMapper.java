package com.eternumgame.controller.mapper;

import com.eternumgame.domain.Arma;
import com.eternumgame.persistence.entity.ArmaEntity;
import org.springframework.stereotype.Component;

@Component
public class ArmaMapper {

    public Arma fromEntitytoDomain (ArmaEntity armaEntity){
        Arma arma = new Arma();
        arma.setIdArma(armaEntity.getIdArma());
        arma.setNombre(armaEntity.getNombreArma());
        arma.setAtaqueFisico(armaEntity.getAtaqueFisico());
        arma.setAtaqueMagico(armaEntity.getAtaqueMagico());
        arma.setDescripcion(armaEntity.getDescripcion());
        arma.setAlcance(armaEntity.getAlcance());
        arma.setPrecio(armaEntity.getPrecio());
        arma.setRutaImagen(armaEntity.getRutaImagen());
        arma.setRecompensa(armaEntity.getRecompensa());
        arma.setTamanio(armaEntity.getTamanio());
        arma.setDestreza(armaEntity.getDestreza());
        arma.setTipoArmaDescripcion(armaEntity.getTipoArma().getDescripcion());
        arma.setTier(armaEntity.getTier());
        arma.setObtenida(armaEntity.getObtenida());
        return arma;
    }

    public ArmaEntity fromDomainToEntity (Arma arma){
        ArmaEntity armaEntity = new ArmaEntity();
        armaEntity.setIdArma(arma.getIdArma());
        armaEntity.setNombreArma(arma.getNombre());
        armaEntity.setAtaqueFisico(arma.getAtaqueFisico());
        armaEntity.setAtaqueMagico(arma.getAtaqueMagico());
        armaEntity.setDescripcion(arma.getDescripcion());
        armaEntity.setAlcance(arma.getAlcance());
        armaEntity.setPrecio(arma.getPrecio());
        armaEntity.setRutaImagen(arma.getRutaImagen());
        armaEntity.setRecompensa(arma.getRecompensa());
        armaEntity.setTamanio(arma.getTamanio());
        armaEntity.setDestreza(arma.getDestreza());
        armaEntity.setTier(arma.getTier());
        armaEntity.setObtenida(arma.getObtenida());
        return armaEntity;
    }


}
