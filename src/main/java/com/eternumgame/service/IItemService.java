package com.eternumgame.service;

import com.eternumgame.domain.Item;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface IItemService {

    public List<Item> findAllItems();

    public Item getOneItem();
}
