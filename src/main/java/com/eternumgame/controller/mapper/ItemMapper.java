package com.eternumgame.controller.mapper;

import com.eternumgame.domain.Item;
import com.eternumgame.persistence.entity.ItemEntity;
import org.springframework.stereotype.Component;

@Component
public class ItemMapper {

    public Item EntityToDomain (ItemEntity itemEntity){
        Item item = new Item();
        item.setIdItem(itemEntity.getIdItem());
        item.setNombre(itemEntity.getNombre());
        item.setDescripcion(itemEntity.getDescripcion());
        item.setRutaImagen(itemEntity.getRutaImagen());
        item.setProbabilidad(itemEntity.getProbabilidad());
        item.setTamanio(itemEntity.getTamanio());
        item.setPrecioBase(itemEntity.getPrecioBase());
        return item;
    }


    public ItemEntity DomaintToEntity (Item item){
        ItemEntity itemEntity = new ItemEntity();
        itemEntity.setIdItem(item.getIdItem());
        itemEntity.setNombre(item.getNombre());
        itemEntity.setDescripcion(item.getDescripcion());
        itemEntity.setRutaImagen(item.getRutaImagen());
        itemEntity.setPrecioBase(item.getPrecioBase());
        itemEntity.setProbabilidad(item.getProbabilidad());
        itemEntity.setTamanio(item.getTamanio());
        return itemEntity;
    }


}
