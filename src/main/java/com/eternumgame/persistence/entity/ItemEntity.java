package com.eternumgame.persistence.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name="ITEM")
@NoArgsConstructor
@Getter @Setter
public class ItemEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="ID_ITEM")
    private int idItem;

    @Column(name="NOMBRE_ITEM")
    private String nombre;

    @Column(name="DESCRIPCION_ITEM")
    private String descripcion;

    @Column(name="RUTA_IMAGEN")
    private String rutaImagen;

    @Column(name="PRECIO_BASE")
    private int precioBase;

    @Column(name="PROBABILIDAD_APARACION")
    private int probabilidad;

    @Column(name="TAMAÑO")
    private int tamanio;

    @ManyToMany(mappedBy = "itemEntitySet")
    private Set<TiendaEntity> tiendaEntitySet;
}
