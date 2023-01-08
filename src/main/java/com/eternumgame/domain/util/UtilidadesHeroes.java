package com.eternumgame.domain.util;

import org.springframework.stereotype.Component;

@Component
public class UtilidadesHeroes {

    public String obtenerCodHeroe(String nombreHeroe){
        String codHeroe = "";
        switch(nombreHeroe){
            case "Kiryon": codHeroe = "KYRI";
                            break;
            case "Jhon"  : codHeroe = "JHON";
                            break;
            case "Baltas" : codHeroe = "BALT";
                            break;
            case "Mahedros" : codHeroe = "MAHE";
                            break;
            case "Sephiro" : codHeroe = "SHEP";
                            break;
            case "Yennefer" : codHeroe = "YENN";
                            break;
            case "Denitra" : codHeroe = "DENI";
                            break;
            case "Elia" : codHeroe = "ELIA";
                            break;
            case "Grojk" : codHeroe = "GROJ";
                            break;
            case "Lion" : codHeroe = "LION";
                            break;
            case "Yonniras" : codHeroe = "YONN";
                            break;
            case "Korock" : codHeroe = "KORO";
                            break;
            case "default" : codHeroe = null;
                            break;
        }
        return codHeroe;
    }
}
