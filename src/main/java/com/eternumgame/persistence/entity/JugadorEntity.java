package com.eternumgame.persistence.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name="PNJ")
@ToString
@NoArgsConstructor
public class JugadorEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="ID_PNJ")
    @Getter @Setter
    private int idPnj;

    @Column(name="COD_HEROE")
    @Getter @Setter
    private String codHeroe;

    @Column(name="NIVEL")
    @Getter @Setter
    private int nivel;

    @Column(name="DINERO")
    @Getter @Setter
    private int dinero;

    @Column(name="NOMBRE_PNJ")
    @Getter @Setter
    private String nombrePnj;

    @OneToMany
    @JoinColumn(name="ID_ARMADURA")
    List<ArmaduraEntity> armaduraEntityList;


    @Getter @Setter
    @OneToOne
    @JoinColumn(name="ID_SESSION")
    public SessionEntity Session;

}
