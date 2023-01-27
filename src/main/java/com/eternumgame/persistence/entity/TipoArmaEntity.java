package com.eternumgame.persistence.entity;


import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;

@Entity
@Table(name="TIPO_ARMA")
@ToString
@NoArgsConstructor
public class TipoArmaEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="COD_TIPO_ARMA")
    @Getter
    @Setter
    private String codTipoArma;

    @Column(name="DESCRIPCION_TIPO_ARMA")
    @Getter @Setter
    private String descripcion;


}
