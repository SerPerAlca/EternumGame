package com.eternumgame.controller.mapper;

import com.eternumgame.domain.Item;
import com.eternumgame.persistence.entity.ItemEntity;
import org.springframework.stereotype.Component;

@Component
public class ItemMapper {

    public Item EntityToDomain (ItemEntity itemEntity){
        Item item = new Item();
        item.setCodItem(itemEntity.getCodItem());
        item.setNombreItem(itemEntity.getNombreItem());
        item.setDescripcionItem(itemEntity.getDescripcionItem());
        item.setRutaImagen(itemEntity.getRutaImagen());
        return item;
    }

    public ItemEntity DomaintToEntity (Item item){
        ItemEntity itemEntity = new ItemEntity();
        itemEntity.setCodItem(item.getCodItem());
        itemEntity.setNombreItem(item.getNombreItem());
        itemEntity.setDescripcionItem(item.getDescripcionItem());
        itemEntity.setRutaImagen(item.getRutaImagen());
        itemEntity.setPrecioBase(item.getPrecioBase());
        return itemEntity;
    }
}
