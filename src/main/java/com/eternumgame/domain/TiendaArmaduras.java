package com.eternumgame.domain;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@NoArgsConstructor
@Getter @Setter
public class TiendaArmaduras extends Tienda{

    public List<Armadura> listaArmaduras;

    public TiendaArmaduras(List<Armadura> listaArmaduras) {
        super();
        this.listaArmaduras = listaArmaduras;
    }
}
