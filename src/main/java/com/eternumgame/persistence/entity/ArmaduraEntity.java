package com.eternumgame.persistence.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name="ARMADURA")
@NoArgsConstructor
@Getter @Setter
public class ArmaduraEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="ID_ARMADURA")
    private int idArmadura;

    @Column(name="COD_EFECTO_MAGICO")
    private String codEfectoMagico;

    @Column(name="NOMBRE_ARMADURA")
    private String nombreArmadura;

    @Column(name="DESCRIPCION")
    private String descripcion;

    @Column(name="DEFENSA_FISICA")
    private int defensaFisica;

    @Column(name="DEFENSA_MAGICA")
    private int defensaMagica;

    @Column(name="PRECIO_BASE")
    private int precioBase;

    @Column(name="RUTA_IMAGEN")
    private String rutaImagen;

    @Column(name="TAMAÑO")
    private int tamanio;

    @Column(name="RECOMPENSA")
    private char recompensa;

    @Column(name="DESTREZA")
    private int destreza;

    @Column(name="TIER")
    private int tier;

    @Column(name="OBTENIDA")
    private char obtenida;

    @ManyToOne
    @JoinColumn(name="COD_TIPO_ARMADURA")
    private TipoArmaduraEntity tipoArmaduraEntity;

    @ManyToMany(mappedBy = "armaduraEntitySet")
    private Set<TiendaEntity> tiendaEntitySet;

}

