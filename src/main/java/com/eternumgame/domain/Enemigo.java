package com.eternumgame.domain;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.web.multipart.MultipartFile;


@NoArgsConstructor
public class Enemigo {

    @Getter @Setter
    private int idEnemigo;

    @Getter @Setter
    private String nombreEnemigo;

    @Getter @Setter
    private String raza;

    @Getter @Setter
    private int ataqueFisico;

    @Getter @Setter
    private int ataqueMagico;

    @Getter @Setter
    private int defensaFisica;

    @Getter @Setter
    private int defensaMagica;

    @Getter @Setter
    private char is_boss;

    @Getter @Setter
    private int alcance;

    @Getter @Setter
    private int velocidad;

    @Getter @Setter
    private int agilidad;

    @Getter @Setter
    private int vitalidad;

    @Getter @Setter
    private String rutaImagen;

    @Getter @Setter
    private MultipartFile imagen;

    @Getter @Setter
    private int experiencia;

    @Getter @Setter
    private int probabilidadAparicion;

    //@Getter @Setter
   // private List<Zona> zonaEntityList;

    @Getter @Setter
    private int numeroEnemigos;

    @Override
    public String toString() {
        return "Enemigo{" +
                "idEnemigo=" + idEnemigo +
                ", nombreEnemigo='" + nombreEnemigo + '\'' +
                ", raza='" + raza + '\'' +
                ", ataqueFisico=" + ataqueFisico +
                ", ataqueMagico=" + ataqueMagico +
                ", defensaFisica=" + defensaFisica +
                ", defensaMagica=" + defensaMagica +
                ", is_boss=" + is_boss +
                ", alcance=" + alcance +
                ", velocidad=" + velocidad +
                ", agilidad=" + agilidad +
                ", vitalidad=" + vitalidad +
                ", rutaImagen='" + rutaImagen + '\'' +
                ", imagen=" + imagen +
                ", probabilidadAparicion=" + probabilidadAparicion +
                ", numeroEnemigos=" + numeroEnemigos +
                '}';
    }
}
