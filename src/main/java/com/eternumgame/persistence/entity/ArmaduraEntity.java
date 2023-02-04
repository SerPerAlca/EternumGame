package com.eternumgame.persistence.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name="ARMADURA")
@NoArgsConstructor
public class ArmaduraEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="ID_ARMADURA")
    @Getter @Setter
    private int idArmadura;

    @Column(name="COD_EFECTO_MAGICO")
    @Getter @Setter
    private String codEfectoMagico;

    @Column(name="NOMBRE_ARMADURA")
    @Getter @Setter
    private String nombreArmadura;

    @Column(name="DESCRIPCION")
    @Getter @Setter
    private String descripcion;

    @Column(name="DEFENSA_FISICA")
    @Getter @Setter
    private int defensaFisica;

    @Column(name="DEFENSA_MAGICA")
    @Getter @Setter
    private int defensaMagica;

    @Column(name="PRECIO_BASE")
    @Getter @Setter
    private int precioBase;

    @Column(name="RUTA_IMAGEN")
    @Getter @Setter
    private String rutaImagen;

    @Column(name="TAMAÑO")
    @Getter @Setter
    private int tamanio;

    @Column(name="RECOMPENSA")
    @Getter @Setter
    private char recompensa;

    @Column(name="DESTREZA")
    @Getter @Setter
    private int destreza;

    @ManyToOne
    @JoinColumn(name="COD_TIPO_ARMADURA")
    @Getter @Setter
    private TipoArmaduraEntity tipoArmaduraEntity;

    @ManyToMany(mappedBy = "armaduraEntitySet")
    private Set<TiendaEntity> tiendaEntitySet;

}

