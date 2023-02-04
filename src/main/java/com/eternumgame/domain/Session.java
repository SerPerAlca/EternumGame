package com.eternumgame.domain;


import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

@NoArgsConstructor
@Getter @Setter
public class Session {

    private int idSession;

    private int numPlayers;

    private int dinero;

    private Date fechaSession;
}
