package com.eternumgame.domain;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import org.springframework.web.multipart.MultipartFile;

@ToString
@NoArgsConstructor
public class Armadura {

    @Getter @Setter
    private int idArmadura;

    @Getter @Setter
    private String codTipoArmadura;

    @Getter @Setter
    private String codEfectoMagico;

    @Getter @Setter
    private int idPNJ;

    @Getter @Setter
    private String nombreArmadura;

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
    private int tamaño;

    @Getter @Setter
    private MultipartFile imagen;

    @Getter @Setter
    private String tipoArmaduraDescripcion;



}
