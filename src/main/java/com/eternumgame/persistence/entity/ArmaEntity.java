package com.eternumgame.persistence.entity;


import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Set;

@NoArgsConstructor
@Getter @Setter
@Table(name="ARMA")
@Entity
public class ArmaEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="ID_ARMA")
    private int idArma;

    @ManyToOne
    @JoinColumn(name="COD_TIPO_ARMA")
    private TipoArmaEntity tipoArma;

    @Column(name="NOMBRE_ARMA")
    private String nombreArma;

    @Column(name="DESCRIPCION")
    private String descripcion;

    @Column(name="DAÑO_FISICO")
    private int ataqueFisico;

    @Column(name="DAÑO_MAGICO")
    private int ataqueMagico;

    @Column(name="ALCANCE")
    private int alcance;

    @Column(name="PRECIO_BASE")
    private int precio;

    @Column(name="RUTA_IMAGEN")
    private String rutaImagen;

    @Column(name="RECOMPENSA")
    private char recompensa;

    @Column(name="TAMAÑO")
    private int tamanio;

    @Column(name="DESTREZA")
    private int destreza;

    @Column(name="TIER")
    private int tier;

    @Column(name="OBTENIDA")
    private char obtenida;

    @ManyToMany(mappedBy = "armaEntitySet")
    private Set<TiendaEntity> tiendaEntitySet;

}
