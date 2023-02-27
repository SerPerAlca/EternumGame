package com.eternumgame.domain;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.web.multipart.MultipartFile;


@NoArgsConstructor
@Getter @Setter
public class Arma extends ObjetoVenta {

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

    private int tier;

    private char obtenida;

    public Arma(int idArma, String codigoClase, String tipoArmaDescripcion, String nombre, String descripcion, int ataqueFisico, int ataqueMagico, int alcance, int precio, String rutaImagen, MultipartFile imagen, char recompensa, int tamanio, int destreza, int cantidad, int tier, char obtenida) {
        this.idArma = idArma;
        this.codigoClase = codigoClase;
        this.tipoArmaDescripcion = tipoArmaDescripcion;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.ataqueFisico = ataqueFisico;
        this.ataqueMagico = ataqueMagico;
        this.alcance = alcance;
        this.precio = precio;
        this.rutaImagen = rutaImagen;
        this.imagen = imagen;
        this.recompensa = recompensa;
        this.tamanio = tamanio;
        this.destreza = destreza;
        this.cantidad = cantidad;
        this.tier = tier;
        this.obtenida = obtenida;
    }
}
