package com.eternumgame.domain;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.web.multipart.MultipartFile;


@NoArgsConstructor
@Getter @Setter
public class Arma {

    private int idArma;

    private String codigoClase = "arma";

    private String tipoArmaDescripcion;

    private String nombre;

    private String descripcion;

    private int ataqueFisico;

    private int ataqueMagico;

    private int alcance;

    private int precio;

    private String rutaImagen;

    private MultipartFile imagen;

    private char recompensa;

    private int tamanio;

    private int destreza;

    private int cantidad;

}
