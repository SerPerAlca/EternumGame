package com.eternumgame.persistence.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;

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

    @Column(name="ESQUIVA")
    @Getter @Setter
    private int esquiva;

    @Column(name="VITALIDAD")
    @Getter @Setter
    private int vitalidad;

    @Column(name="RUTA_IMAGEN")
    @Getter @Setter
    private String rutaImagen;

    public EnemigoEntity(String nombreEnemigo, String raza, int ataqueFisico, int ataqueMagico, int defensaFisica,
                         int defensaMagica, char is_boss, int alcance, int velocidad,
                         int esquiva, int vitalidad, String rutaImagen) {
        this.nombreEnemigo = nombreEnemigo;
        this.raza = raza;
        this.ataqueFisico = ataqueFisico;
        this.ataqueMagico = ataqueMagico;
        this.defensaFisica = defensaFisica;
        this.defensaMagica = defensaMagica;
        this.is_boss = is_boss;
        this.alcance = alcance;
        this.velocidad = velocidad;
        this.esquiva = esquiva;
        this.vitalidad = vitalidad;
        this.rutaImagen = rutaImagen;
    }
}
