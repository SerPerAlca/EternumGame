package com.eternumgame.domain;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Getter @Setter
public class Item {

    private int idItem;

    private String codigoClase = "item";

    private String nombre;

    private String descripcion;

    private String rutaImagen;

    private int precioBase;

    private int cantidad;

    private int probabilidad;

    private int tamanio;
}
