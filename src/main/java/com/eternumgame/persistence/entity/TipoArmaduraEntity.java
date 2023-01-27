package com.eternumgame.persistence.entity;


import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;

@Entity
@Table(name="TIPO_ARMADURA")
@ToString
@NoArgsConstructor
public class TipoArmaduraEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="COD_TIPO_ARMADURA")
    @Getter  @Setter
    private String codTipoArmadura;

    @Column(name="DESCRIPCION_TIPO_ARMADURA")
    @Getter @Setter
    private String descripcion;
}
