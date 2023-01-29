package com.eternumgame.domain.util;

import com.eternumgame.domain.Enemigo;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

@Component
public class UtilidadesEnemigos {


    public Enemigo enemigoRandom (List<Enemigo>enemigoList){
        List<Enemigo> listaAux = new ArrayList<>();
        // Recorremos la lista de enemigos
        for (Enemigo enemy : enemigoList){
            //Obtenemos la probabilidad de aparición
            int numeroCopias = enemy.getProbabilidadAparicion();
            // metemos en una lista auxiliar a ese enemigo tantas veces como probabilidad de aparicion tenga
            for(int i = 0; i < numeroCopias ; i++ ){
                listaAux.add(enemy);
            }
        }
        // generamos un numero random teniendo en cuenta el tamaño de la lista
        int numRandom = (int)(Math.random()*listaAux.size()-1);
        Enemigo enemigo = listaAux.get(numRandom);
        return enemigo;
    }

    public void calcularNumEnemigos(Enemigo enemigo, int numeroJugadores){
        int maximo = (numeroJugadores * 2) -1;
        int minimo = numeroJugadores - 1;
        // calculamos el numero de enemigos incluyendo el maximo y minimo
        int numeroEnemigos = (int)Math.floor(Math.random()*(minimo-(maximo))+(maximo));
        enemigo.setNumeroEnemigos(numeroEnemigos);
    }

    public void ordenarPorProbabilidad(List<Enemigo>enemigoList){

        Collections.sort(enemigoList, (e1, e2) -> Integer.valueOf(e1.getProbabilidadAparicion()).compareTo(e2.getProbabilidadAparicion()));
    }

}
