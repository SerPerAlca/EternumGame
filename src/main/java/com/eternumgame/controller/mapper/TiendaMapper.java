package com.eternumgame.controller.mapper;

import com.eternumgame.domain.Tienda;
import com.eternumgame.domain.TiendaArmaduras;
import com.eternumgame.domain.TiendaArmas;
import com.eternumgame.domain.TiendaItems;
import com.eternumgame.persistence.entity.TiendaEntity;
import org.springframework.stereotype.Component;

@Component
public class TiendaMapper {

    public Tienda fromEntityToDomain (TiendaEntity tiendaEntity){
        Tienda tienda = new Tienda();
        tienda.setIdTienda(tiendaEntity.getIdTienda());
        tienda.setNombreTienda(tiendaEntity.getNombreTienda());
        tienda.setEslogan(tiendaEntity.getEslogan());
        tienda.setMultiPrecioBase(tiendaEntity.getMultiPrecioBase());
        tienda.setNombreZona(tiendaEntity.getZonaEntity().getNombreZona());
        return tienda;
    }

    public TiendaEntity fromDomaintoEntity (Tienda tienda){
        TiendaEntity tiendaEntity = new TiendaEntity();
        tiendaEntity.setIdTienda(tienda.getIdTienda());
        tiendaEntity.setNombreTienda(tienda.getNombreTienda());
        tiendaEntity.setEslogan(tienda.getEslogan());
        tiendaEntity.setMultiPrecioBase(tienda.getMultiPrecioBase());
        return tiendaEntity;
    }

    public TiendaArmas fromTiendaToTiendaArmas(Tienda tienda){
        TiendaArmas tiendaArmas = new TiendaArmas();
        tiendaArmas.setIdTienda(tienda.getIdTienda());
        tiendaArmas.setNombreTienda(tienda.getNombreTienda());
        tiendaArmas.setEslogan(tienda.getEslogan());
        tiendaArmas.setNombreZona(tienda.getNombreZona());
        tiendaArmas.setMultiPrecioBase(tienda.getMultiPrecioBase());
        tiendaArmas.setTipo(tienda.getTipo());
        return tiendaArmas;
    }

    public TiendaArmaduras fromTiendaToTiendaArmaduras (Tienda tienda){
        TiendaArmaduras tiendaArmaduras = new TiendaArmaduras();
        tiendaArmaduras.setIdTienda(tienda.getIdTienda());
        tiendaArmaduras.setNombreTienda(tienda.getNombreTienda());
        tiendaArmaduras.setEslogan(tienda.getEslogan());
        tiendaArmaduras.setNombreZona(tienda.getNombreZona());
        tiendaArmaduras.setMultiPrecioBase(tienda.getMultiPrecioBase());
        tiendaArmaduras.setTipo(tienda.getTipo());
        return tiendaArmaduras;
    }

    public TiendaItems fromTiendaToTiendaItems (Tienda tienda){
        TiendaItems tiendaItems = new TiendaItems();
        tiendaItems.setIdTienda(tienda.getIdTienda());
        tiendaItems.setNombreTienda(tienda.getNombreTienda());
        tiendaItems.setEslogan(tienda.getEslogan());
        tiendaItems.setNombreZona(tienda.getNombreZona());
        tiendaItems.setMultiPrecioBase(tienda.getMultiPrecioBase());
        tiendaItems.setTipo(tienda.getTipo());
        return tiendaItems;
    }
}
