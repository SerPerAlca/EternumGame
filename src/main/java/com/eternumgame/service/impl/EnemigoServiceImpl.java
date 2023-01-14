package com.eternumgame.service.impl;

import com.eternumgame.controller.mapper.EnemigoEntityMapper;
import com.eternumgame.controller.mapper.ZonaMapper;
import com.eternumgame.domain.Enemigo;
import com.eternumgame.persistence.entity.EnemigoEntity;
import com.eternumgame.persistence.entity.ZonaEntity;
import com.eternumgame.persistence.repository.EnemigoRepository;
import com.eternumgame.persistence.repository.ZonaRepository;
import com.eternumgame.service.IEnemigoService;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

@Service
public class EnemigoServiceImpl implements IEnemigoService {

    @Autowired
    private EnemigoRepository enemigoRepository;

    @Autowired
    private EnemigoEntityMapper enemyMapper;

    @Autowired
    private ZonaRepository zonaRepository;

    @Autowired
    private ZonaMapper zonaMapper;


    @Override
    public List<Enemigo> findAllEnemys() {
        List<Enemigo> enemigoList = new ArrayList<>();
        List <EnemigoEntity> enemigoEntityList;
        enemigoEntityList =  enemigoRepository.findAll();
        for( EnemigoEntity enemy : enemigoEntityList){
            Enemigo enemigo = enemyMapper.fromEnemigoEntityToDomain(enemy);
            enemigoList.add(enemigo);
        }
        return enemigoList;
    }

    // METHOD PARA EXTRAER LA LISTA DE HEROES DE UN JSON
    public List<String> findHeroesFromJson() throws IOException, ParseException {
        List<String> heroesList = new ArrayList();
        try{
            JSONParser parser = new JSONParser();
            FileReader reader = new FileReader("src\\main\\webapp\\public\\json\\PNJ\\listaHeroes.json");
            Object obj = parser.parse(reader);
            JSONArray root = (JSONArray)obj;
            JSONObject param = (JSONObject) root.get(0);
            JSONArray arrayHeroes = (JSONArray) param.get("heroes");
            Iterator<String> iterator = arrayHeroes.iterator();
            while (iterator.hasNext()) {
                heroesList.add(iterator.next());
            }
            return heroesList;
        }catch(Exception e){
            e.printStackTrace();
        }
        return null;
    }

    /* METODO PRUEBA PARA DETECTAR EL ORIGEN DE LAS RUTAS DEL PROYECTO
        (DESDE DONDE SE CREE EL DOCUMENTO HAY QUE PARTIR)
     */
    @Override
    public void crearFichero() {
        try{
            FileWriter myWriter = new FileWriter("filename.txt");
            myWriter.write("Archivo para encontrar la ruta por defecto en Java");
            myWriter.close();
            System.out.println("Archivo creado");
        }catch(IOException e){
            System.out.println("Ocurrió un error");
            e.printStackTrace();
        }
    }

    @Override
    public List<Enemigo> findEnemyFromZone(String zona) {
        List<Enemigo> enemigoList = new ArrayList<>();
        try {
            // Obtengo la zona filtrando por el nombre
            ZonaEntity zonaEntity = zonaRepository.findByName(zona);
            if (null != zonaEntity){
                // Obtengo la lista de enemigos de la zona
                List<EnemigoEntity> listaEnemysEntity = zonaEntity.getEnemigoEntityList();
                for ( EnemigoEntity enemigo : listaEnemysEntity){
                    Enemigo enemigoDom = enemyMapper.fromEnemigoEntityToDomain(enemigo);
                    enemigoList.add(enemigoDom);
                }
            } else {
                return enemigoList;
            }
        }catch (Exception e){
            e.printStackTrace();
        }
        return enemigoList;
    }



}
