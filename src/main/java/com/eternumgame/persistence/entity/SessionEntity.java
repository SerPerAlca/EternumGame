package com.eternumgame.persistence.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name="SESSION_PNJ")
@NoArgsConstructor
@Getter @Setter
public class SessionEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="ID_SESSION")
    private int idSession;

    @Column(name="NUMERO_PLAYERS")
    private int numPlayers;

    @Column(name="DINERO")
    private int dinero;

    @Column(name="CREACION_SESSION")
    private Date fechaSession;
}
