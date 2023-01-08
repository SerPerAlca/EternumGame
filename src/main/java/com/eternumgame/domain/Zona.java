package com.eternumgame.domain;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@NoArgsConstructor
@Getter @Setter
public class Zona {

    private int idZona;

    private String nombreZona;

    private int idTerritorio;

    private int peligrosidad;

    private List<Enemigo> enemigoList;

}
