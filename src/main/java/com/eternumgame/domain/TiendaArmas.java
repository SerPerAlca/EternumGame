package com.eternumgame.domain;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@NoArgsConstructor
@Getter @Setter
public class TiendaArmas extends Tienda{

    public List<Arma> listaArmas;

    public TiendaArmas(List<Arma> listaArmas) {
        super();
        this.listaArmas = listaArmas;
    }
}
