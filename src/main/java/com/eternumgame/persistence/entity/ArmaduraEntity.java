package com.eternumgame.persistence.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;

@Entity
@Table(name="ARMADURA")
@ToString
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
    private int tamaño;

    @ManyToOne
    @JoinColumn(name="COD_TIPO_ARMADURA")
    @Getter @Setter
    private TipoArmaduraEntity tipoArmaduraEntity;

    public ArmaduraEntity(String codEfectoMagico, String nombreArmadura, String descripcion, int defensaFisica, int defensaMagica, int precioBase, String rutaImagen, int tamaño, TipoArmaduraEntity tipoArmaduraEntity) {
        this.codEfectoMagico = codEfectoMagico;
        this.nombreArmadura = nombreArmadura;
        this.descripcion = descripcion;
        this.defensaFisica = defensaFisica;
        this.defensaMagica = defensaMagica;
        this.precioBase = precioBase;
        this.rutaImagen = rutaImagen;
        this.tamaño = tamaño;
        this.tipoArmaduraEntity = tipoArmaduraEntity;
    }
}

