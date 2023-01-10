package com.eternumgame.persistence.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name="ITEM")
@NoArgsConstructor
@Getter @Setter
public class ItemEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="COD_ITEM")
    private String codItem;

    @Column(name="NOMBRE_ITEM")
    private String nombreItem;

    @Column(name="DESCRIPCION_ITEM")
    private String descripcionItem;

    @Column(name="RUTA_IMAGEN")
    private String rutaImagen;

    @Column(name="PRECIO_BASE")
    private int precioBase;
}
