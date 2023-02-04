package com.eternumgame.domain;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@NoArgsConstructor
@Getter @Setter
public class TiendaItems extends Tienda{

    public List<Item> listaItems;

    public TiendaItems(List<Item> listaItems) {
        super();
        this.listaItems = listaItems;
    }
}
