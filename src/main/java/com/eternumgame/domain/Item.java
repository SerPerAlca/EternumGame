package com.eternumgame.domain;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Getter @Setter
public class Item extends ObjetoVenta{

    private int idItem;

    private String codigoClase = "item";

    private String nombre;

    private String descripcion;

    private String rutaImagen;

    private int precioBase;

    private int cantidad;

    private int probabilidad;

    private int tamanio;

    public Item(int idItem, String codigoClase, String nombre, String descripcion, String rutaImagen, int precioBase, int cantidad, int probabilidad, int tamanio) {
        super();
        this.idItem = idItem;
        this.codigoClase = codigoClase;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.rutaImagen = rutaImagen;
        this.precioBase = precioBase;
        this.cantidad = cantidad;
        this.probabilidad = probabilidad;
        this.tamanio = tamanio;
    }
}
