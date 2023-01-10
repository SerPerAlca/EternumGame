package com.eternumgame.domain;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Getter @Setter
public class Item {

    private String codItem;

    private String nombreItem;

    private String descripcionItem;

    private String rutaImagen;

    private int precioBase;


}
