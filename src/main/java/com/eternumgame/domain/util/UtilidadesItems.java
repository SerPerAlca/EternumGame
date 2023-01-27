package com.eternumgame.domain.util;

import com.eternumgame.domain.Item;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class UtilidadesItems {

    public Item obtenerItemRandom(List<Item> itemList){
        List<Item> itemListAux = new ArrayList<Item>();
        for(Item itemIndex : itemList){
            //Comprobamos la probabilidad de aparición
            int numeroCopias = itemIndex.getProbabilidad();
            for(int i=0; i<numeroCopias; i++){
                itemListAux.add(itemIndex);
            }
        }
        // generamos un numero random teniendo en cuenta el tamaño de la lista
        int numRandom = (int)(Math.random()*itemListAux.size()-1);
        //Obtenemos el item de la recompensa
        Item item = itemListAux.get(numRandom);

        //SI es oro de 1 a 100
        if (item.getNombre().equals("ORO")){
            item.setCantidad((int)(Math.random()*100+1));
        }
        // Si es un macuto solo se obtendrá 1
        else if(item.getNombre().equals("MACUTO PEQUEÑO") ||
                item.getNombre().equals("MACUTO MEDIANO") ||
                item.getNombre().equals("MACUTO MÁGICO")){
            item.setCantidad(1);
            //Para tod lo demás, de 1 a 4.
        } else {
            item.setCantidad((int)(Math.random()*5+1));
        }
        return item;
    }

}
