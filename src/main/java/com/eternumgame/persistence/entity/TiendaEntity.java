package com.eternumgame.persistence.entity;


import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name="TIENDA")
@NoArgsConstructor
@Getter @Setter
public class TiendaEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="ID_TIENDA")
    private int idTienda;

    @Column(name="NOMBRE_TIENDA")
    private String nombreTienda;

    @Column(name="ESLOGAN")
    private String eslogan;

    @Column(name="MULTIPLICADOR_PRECIO_BASE")
    private int multiPrecioBase;

    @ManyToOne
    @JoinColumn(name="ID_ZONA")
    private ZonaEntity zonaEntity;

    @ManyToMany
    @JoinTable(
        name="ARMADURA_TIENDA",
        joinColumns = @JoinColumn(name = "ID_TIENDA"),
        inverseJoinColumns = @JoinColumn(name = "ID_ARMADURA"))
    private Set<ArmaduraEntity> armaduraEntitySet;

    @ManyToMany
    @JoinTable(
            name="ARMA_TIENDA",
            joinColumns = @JoinColumn(name = "ID_TIENDA"),
            inverseJoinColumns = @JoinColumn(name = "ID_ARMA"))
    private Set<ArmaEntity> armaEntitySet;

    @ManyToMany
    @JoinTable(
            name="ITEM_TIENDA",
            joinColumns = @JoinColumn(name = "ID_TIENDA"),
            inverseJoinColumns = @JoinColumn(name = "ID_ITEM"))
    private Set<ItemEntity> itemEntitySet;

}
