package com.eternumgame.service.impl;

import com.eternumgame.controller.mapper.ArmaMapper;
import com.eternumgame.controller.mapper.ArmaduraMapper;
import com.eternumgame.controller.mapper.ItemMapper;
import com.eternumgame.controller.mapper.TiendaMapper;
import com.eternumgame.domain.*;
import com.eternumgame.domain.util.TiendaUtils;
import com.eternumgame.persistence.entity.ArmaEntity;
import com.eternumgame.persistence.entity.ArmaduraEntity;
import com.eternumgame.persistence.entity.ItemEntity;
import com.eternumgame.persistence.entity.TiendaEntity;
import com.eternumgame.persistence.repository.TiendaRepository;
import com.eternumgame.service.ITiendaService;
import org.json.simple.parser.ParseException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@Service
public class TiendaServiceImpl implements ITiendaService {

    @Autowired
    private TiendaRepository tiendaRepository;

    @Autowired
    private TiendaMapper tiendaMapper;

    @Autowired
    private TiendaUtils tiendaUtils;

    @Autowired
    private ArmaMapper armaMapper;

    @Autowired
    private ArmaduraMapper armaduraMapper;

    @Autowired
    private ItemMapper itemMapper;

    @Override
    public Tienda findAll() {
        return null;
    }

    @Override
    public TiendaArmas findTiendaArmas(String tipoTienda, String ubicacion) throws IOException, ParseException {
        List<Arma> ListaArmas = new ArrayList<Arma>();
        TiendaArmas tiendaArmas = new TiendaArmas();
        Tienda tienda = new Tienda();
        TiendaEntity tiendaEntity = new TiendaEntity();
        try {
            //Obtengo el ID correcto en base a la ubicacion y el tipo de tienda q busco
            int id = tiendaUtils.findIdByParams(tipoTienda,ubicacion);
            //Obtengo Entity de la tienda correcta
            tiendaEntity = tiendaRepository.findById(id);
            //La convierto a objeto de dominio
            tienda = tiendaMapper.fromEntityToDomain(tiendaEntity);
            //Comprobamos que efectivamente es una tienda de Armas
            if (!tiendaEntity.getArmaEntitySet().isEmpty()){
                //meto las armasEntity en una lista
                List<ArmaEntity> listaArmasEntity = new ArrayList<>(tiendaEntity.getArmaEntitySet());
                //recorro la lista para convertirlas a Armas de Dominio
                for (ArmaEntity armaEntity : listaArmasEntity){
                    ListaArmas.add(armaMapper.fromEntitytoDomain(armaEntity));
                }
                //Convierto el objeto tienda en TiendasArmas
                tiendaArmas = tiendaMapper.fromTiendaToTiendaArmas(tienda);
                //Le agrego la lista de Armas
                tiendaArmas.listaArmas = ListaArmas;
                tiendaArmas.setTipo(Constantes.ARMAS);
                System.out.println(tiendaArmas);
            }
        }catch(Exception e){
            e.printStackTrace();
        }

        return tiendaArmas;
    }

    @Override
    public TiendaArmaduras findTiendaArmaduras(String tipoTienda, String ubicacion) throws IOException, ParseException {
        List<Armadura> listaArmadura = new ArrayList<Armadura>();
        TiendaArmaduras tiendaArmaduras = new TiendaArmaduras();
        Tienda tienda = new Tienda();
        TiendaEntity tiendaEntity = new TiendaEntity();
        try {
            int id = tiendaUtils.findIdByParams(tipoTienda,ubicacion);
            tiendaEntity = tiendaRepository.findById(id);
            tienda = tiendaMapper.fromEntityToDomain(tiendaEntity);
            if(!tiendaEntity.getArmaduraEntitySet().isEmpty()){
                List<ArmaduraEntity> listaArmaduraEntity = new ArrayList<>(tiendaEntity.getArmaduraEntitySet());
                for (ArmaduraEntity armaduraEntity : listaArmaduraEntity){
                    listaArmadura.add(armaduraMapper.fromArmaduraEntityToDomain(armaduraEntity));
                }
                tiendaArmaduras = tiendaMapper.fromTiendaToTiendaArmaduras(tienda);
                tiendaArmaduras.listaArmaduras = listaArmadura;
                tiendaArmaduras.setTipo(Constantes.ARMADURAS);
            }
        }catch(Exception e){
            e.printStackTrace();
        }

        return tiendaArmaduras;
    }

    @Override
    public TiendaItems findTiendaItems(String tipoTienda, String ubicacion) throws IOException, ParseException {
        List<Item> listaItems = new ArrayList<Item>();
        TiendaItems tiendaItems = new TiendaItems();
        Tienda tienda = new Tienda();
        TiendaEntity tiendaEntity = new TiendaEntity();
        try {
            int id = tiendaUtils.findIdByParams(tipoTienda,ubicacion);
            tiendaEntity = tiendaRepository.findById(id);
            tienda = tiendaMapper.fromEntityToDomain(tiendaEntity);
            if(!tiendaEntity.getItemEntitySet().isEmpty()){
                List<ItemEntity> listaItemsEntity = new ArrayList<>(tiendaEntity.getItemEntitySet());
                for (ItemEntity itemEntity : listaItemsEntity){
                    listaItems.add(itemMapper.EntityToDomain(itemEntity));
                }
                tiendaItems = tiendaMapper.fromTiendaToTiendaItems(tienda);
                tiendaItems.listaItems = listaItems;
                tiendaItems.setTipo(Constantes.ITEMS);
            }
        }catch(Exception e){
            e.printStackTrace();
        }

        return tiendaItems;
    }
}
