package com.eternumgame.domain;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.web.multipart.MultipartFile;

@NoArgsConstructor
public class Armadura extends ObjetoVenta{

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

    public Armadura(int idArmadura, String codigoClase, String codTipoArmadura, String codEfectoMagico, int idPNJ, String nombre, String descripcion, int defensaFisica, int defensaMagica, int precioBase, String rutaImagen, int tamanio, MultipartFile imagen, String tipoArmaduraDescripcion, int cantidad, int destreza, char recompensa) {
        super();
        this.idArmadura = idArmadura;
        this.codigoClase = codigoClase;
        this.codTipoArmadura = codTipoArmadura;
        this.codEfectoMagico = codEfectoMagico;
        this.idPNJ = idPNJ;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.defensaFisica = defensaFisica;
        this.defensaMagica = defensaMagica;
        this.precioBase = precioBase;
        this.rutaImagen = rutaImagen;
        this.tamanio = tamanio;
        this.imagen = imagen;
        this.tipoArmaduraDescripcion = tipoArmaduraDescripcion;
        this.cantidad = cantidad;
        this.destreza = destreza;
        this.recompensa = recompensa;
    }
}
