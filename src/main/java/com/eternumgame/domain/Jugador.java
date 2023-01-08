package com.eternumgame.domain;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@ToString
@NoArgsConstructor
public class Jugador {

    @Getter @Setter
    private int idPnj;

    @Getter @Setter
    private String codHeroe;

    @Getter @Setter
    private int nivel;

    @Getter @Setter
    private int dinero;

    @Getter @Setter
    private String nombrePnj;

    @Getter @Setter
    public int idSession;

    @Getter @Setter
    public Session session;
}
