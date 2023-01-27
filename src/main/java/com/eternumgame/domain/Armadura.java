package com.eternumgame.domain;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.web.multipart.MultipartFile;

@NoArgsConstructor
public class Armadura {

    @Getter @Setter
    private int idArmadura;

    @Getter
    private String codigoClase = "armadura";

    @Getter @Setter
    private String codTipoArmadura;

    @Getter @Setter
    private String codEfectoMagico;

    @Getter @Setter
    private int idPNJ;

    @Getter @Setter
    private String nombre;

    @Getter @Setter
    private String descripcion;

    @Getter @Setter
    private int defensaFisica;

    @Getter @Setter
    private int defensaMagica;

    @Getter @Setter
    private int precioBase;

    @Getter @Setter
    private String rutaImagen;

    @Getter @Setter
    private int tamanio;

    @Getter @Setter
    private MultipartFile imagen;

    @Getter @Setter
    private String tipoArmaduraDescripcion;

    @Getter @Setter
    private int cantidad;

    @Getter @Setter
    private int destreza;

    @Getter  @Setter
    private char recompensa;
}
