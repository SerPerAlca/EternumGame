package com.eternumgame.service.impl;

import com.eternumgame.controller.mapper.ItemMapper;
import com.eternumgame.domain.Item;
import com.eternumgame.domain.util.UtilidadesItems;
import com.eternumgame.persistence.entity.ItemEntity;
import com.eternumgame.persistence.repository.ItemRepository;
import com.eternumgame.service.IItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ItemServiceImpl implements IItemService {

    @Autowired
    private ItemRepository itemRepository;

    @Autowired
    private ItemMapper itemMapper;

    @Autowired
    private UtilidadesItems utilidadesItems;

    @Autowired
    private SessionPnjServiceServiceImpl sessionPnjServiceService;

    @Override
    public List<Item> findAllItems() {
        List<Item> itemList = new ArrayList<>();
        List<ItemEntity> itemEntityList = new ArrayList<>();
        itemEntityList = itemRepository.findAll();
        for (ItemEntity itemEntity : itemEntityList){
            Item item = itemMapper.EntityToDomain(itemEntity);
            itemList.add(item);
        }
        return itemList;
    }

    // Metodo para obtener uno o varios items de recompensa
    @Override
    public Item getOneItem() {
        Item item = new Item();
        List<Item> itemList= new ArrayList<Item>();
        List<ItemEntity> itemEntityList= new ArrayList<ItemEntity>();
        itemEntityList = itemRepository.findAll();
        for(ItemEntity itemEntity : itemEntityList){
            item = itemMapper.EntityToDomain(itemEntity);
            itemList.add(item);
        }
        Item itemRecompensa = utilidadesItems.obtenerItemRandom(itemList);
        // si la recompensa es oro, guardamos en session el oro obtenido
        if(itemRecompensa.getNombre().equals("ORO")){
            sessionPnjServiceService.ganarDinero(itemRecompensa.getCantidad());
        }
        return itemRecompensa;
    }
}
