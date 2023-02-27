package com.eternumgame.domain.util;

import com.eternumgame.domain.Constantes;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.json.simple.parser.ParseException;
import org.springframework.stereotype.Component;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Component
public class TiendaUtils {


    //Metodo para extraer la tienda de json en base al tipo de tieda y la ubicación
    public int findIdByParams(String tipoTienda, String ubicacion) throws IOException, ParseException {

        String json  = "";
        int id = 0;
        try{
            BufferedReader br = new BufferedReader((
                    new FileReader("src\\main\\webapp\\public\\json\\Tiendas.json")));
            String linea;
             while ((linea = br.readLine()) != null){
                 json += linea;

             }
             br.close();
            ArrayList<Map> listaTienda = new ArrayList<>();
            HashMap<String,Object> mapaTiendas;
            ObjectMapper mapper=new ObjectMapper();
            List<Map<String, Object>> listaMapas = mapper.readValue(json , new TypeReference<List<Map<String, Object>>>(){});
            for(Map map : listaMapas ){
                mapaTiendas = (HashMap<String, Object>) map;
                if(mapaTiendas.containsKey(Constantes.UBICACION) &&
                        ubicacion.equals(mapaTiendas.get(Constantes.UBICACION))){
                    listaTienda = (ArrayList<Map>) mapaTiendas.get(Constantes.TIENDAS);
                    for(Map mapaShop : listaTienda){
                        if(mapaShop.containsKey(Constantes.ID) &&
                                mapaShop.containsKey(Constantes.TIPO) &&
                                tipoTienda.equals(mapaShop.get(Constantes.TIPO))){
                            id =  Integer.parseInt((String) mapaShop.get(Constantes.ID));
                            return id;
                        }
                    }
                }
            }
        }catch(Exception e){
            e.printStackTrace();
        }
        return id;
    }
}
