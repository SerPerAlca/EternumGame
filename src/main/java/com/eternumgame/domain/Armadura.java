package com.eternumgame.domain;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.web.multipart.MultipartFile;

@NoArgsConstructor
@Getter @Setter
public class Armadura extends ObjetoVenta{


    private int idArmadura;

    private String codigoClase = "armadura";

    private String codTipoArmadura;

    private String codEfectoMagico;

    private int idPNJ;

    private String nombre;

    private String descripcion;

    private int defensaFisica;

    private int defensaMagica;

    private int precioBase;

    private String rutaImagen;

    private int tamanio;

    private MultipartFile imagen;

    private String tipoArmaduraDescripcion;

    private int cantidad;

    private int destreza;

    private char recompensa;

    private int tier;

    private char obtenida;

    public Armadura(int idArmadura, String codigoClase, String codTipoArmadura, String codEfectoMagico, int idPNJ, String nombre, String descripcion, int defensaFisica, int defensaMagica, int precioBase, String rutaImagen, int tamanio, MultipartFile imagen, String tipoArmaduraDescripcion, int cantidad, int destreza, char recompensa, int tier, char obtenida) {
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
        this.tier = tier;
        this.obtenida = obtenida;
    }
}
