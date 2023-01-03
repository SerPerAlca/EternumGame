package com.eternumgame.domain;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import org.springframework.web.multipart.MultipartFile;

@ToString
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
    private int esquiva;

    @Getter @Setter
    private int vitalidad;

    @Getter @Setter
    private String rutaImagen;

    @Getter @Setter
    private MultipartFile imagen;

}
