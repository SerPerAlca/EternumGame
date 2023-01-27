package com.eternumgame.persistence.entity;

import lombok.*;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name="ENEMIGO")
@ToString
@NoArgsConstructor
public class EnemigoEntity {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Column(name="ID_ENEMIGO")
    @Getter @Setter
    private int idEnemigo;

    @Column(name="NOMBRE_ENEMIGO")
    @Getter @Setter
    private String nombreEnemigo;

    @Column(name="RAZA")
    @Getter @Setter
    private String raza;

    @Column(name="ATAQUE_FISICO")
    @Getter @Setter
    private int ataqueFisico;

    @Column(name="ATAQUE_MAGICO")
    @Getter @Setter
    private int ataqueMagico;

    @Column(name="DEFENSA_FISICA")
    @Getter @Setter
    private int defensaFisica;

    @Column(name="DEFENSA_MAGICA")
    @Getter @Setter
    private int defensaMagica;

    @Column(name="IS_BOSS")
    @Getter
    @Setter
    private char is_boss;

    @Column(name="ALCANCE")
    @Getter @Setter
    private int alcance;

    @Column(name="VELOCIDAD")
    @Getter @Setter
    private int velocidad;

    @Column(name="AGILIDAD")
    @Getter @Setter
    private int agilidad;

    @Column(name="VITALIDAD")
    @Getter @Setter
    private int vitalidad;

    @Column(name="RUTA_IMAGEN")
    @Getter @Setter
    private String rutaImagen;

    @Column(name="EXPERIENCIA")
    @Getter @Setter
    private int experiencia;

    @Column(name="PROBABILIDAD_APARACION")
    @Getter @Setter
    private int probabilidadAparicion;

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(name = "ENEMIGO_ZONA",
            joinColumns = { @JoinColumn(name = "ID_ENEMIGO") },
            inverseJoinColumns = { @JoinColumn(name = "ID_ZONA") })
    @Getter @Setter
    private List<ZonaEntity> zonaEntityList;

    public EnemigoEntity(String nombreEnemigo, String raza, int ataqueFisico, int ataqueMagico, int defensaFisica, int defensaMagica, char is_boss, int alcance, int velocidad, int agilidad, int vitalidad, String rutaImagen, List<ZonaEntity> zonaEntityList) {
        this.nombreEnemigo = nombreEnemigo;
        this.raza = raza;
        this.ataqueFisico = ataqueFisico;
        this.ataqueMagico = ataqueMagico;
        this.defensaFisica = defensaFisica;
        this.defensaMagica = defensaMagica;
        this.is_boss = is_boss;
        this.alcance = alcance;
        this.velocidad = velocidad;
        this.agilidad = agilidad;
        this.vitalidad = vitalidad;
        this.rutaImagen = rutaImagen;
        this.zonaEntityList = zonaEntityList;
    }
}
