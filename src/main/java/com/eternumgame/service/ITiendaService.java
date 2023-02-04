package com.eternumgame.service;

import com.eternumgame.domain.Tienda;
import com.eternumgame.domain.TiendaArmaduras;
import com.eternumgame.domain.TiendaArmas;
import com.eternumgame.domain.TiendaItems;
import org.json.simple.parser.ParseException;
import org.springframework.stereotype.Service;

import java.io.IOException;

@Service
public interface ITiendaService {

    public Tienda findAll();

    public TiendaArmas findTiendaArmas(String tipoTienda, String ubicacion) throws IOException, ParseException;

    public TiendaArmaduras findTiendaArmaduras(String tipoTienda, String ubicacion) throws IOException, ParseException;

    public TiendaItems findTiendaItems(String tipoTienda, String ubicacion) throws IOException, ParseException;
}
