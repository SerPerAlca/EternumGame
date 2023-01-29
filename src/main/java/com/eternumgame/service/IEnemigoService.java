package com.eternumgame.service;

import com.eternumgame.domain.Enemigo;
import org.json.simple.parser.ParseException;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.List;

@Service
public interface IEnemigoService {

    public List<Enemigo> findAllEnemys();

    public List<String> findHeroesFromJson() throws IOException, ParseException;

    public void crearFichero();

    public List<Enemigo> findEnemyFromZone(String Zona);

    public Enemigo findEnemyByName(String enemy);
}
