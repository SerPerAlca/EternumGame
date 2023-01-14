package com.eternumgame.persistence.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name="ZONA")
@NoArgsConstructor
public class ZonaEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="ID_ZONA")
    @Getter  @Setter
    private int idZona;

    @Column(name="NOMBRE_ZONA")
    @Getter @Setter
    private String nombreZona;


    @Column(name="PELIGROSIDAD")
    @Getter @Setter
    private int peligrosidad;

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(name = "ENEMIGO_ZONA",
            joinColumns = { @JoinColumn(name = "ID_ZONA") },
            inverseJoinColumns = { @JoinColumn(name = "ID_ENEMIGO") })
    @Getter @Setter
    private List<EnemigoEntity> enemigoEntityList;

    @Override
    public String toString() {
        return "ZonaEntity{" +
                "idZona=" + idZona +
                ", nombreZona='" + nombreZona + '\'' +
                ", peligrosidad=" + peligrosidad +
                '}';
    }
}
