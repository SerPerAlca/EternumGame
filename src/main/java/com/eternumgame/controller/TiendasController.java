package com.eternumgame.controller;

import com.eternumgame.controller.mapper.ItemMapper;
import com.eternumgame.domain.*;
import com.eternumgame.persistence.entity.SessionEntity;
import com.eternumgame.service.IArmaService;
import com.eternumgame.service.IArmaduraService;
import com.eternumgame.service.ISessionPnjService;
import com.eternumgame.service.ITiendaService;
import org.json.simple.parser.ParseException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@Controller
public class TiendasController {

    @Autowired
    private ISessionPnjService sessionPnjService;

    @Autowired
    private ITiendaService tiendaService;

    @Autowired
    private ItemMapper itemMapper;

    @Autowired
    private IArmaService armaService;

    @Autowired
    private IArmaduraService armaduraService;


    @RequestMapping(value = "/mostrarTienda/{tipoTienda}/{ubicacion}", method = RequestMethod.GET)
    public String mostrarTiendas(@PathVariable String tipoTienda,@PathVariable String ubicacion, Model model,
                                 HttpServletRequest request) throws IOException, ParseException {

        switch(tipoTienda){
            case "Arma" :       TiendaArmas tiendaArmas = tiendaService.findTiendaArmas(tipoTienda,ubicacion);
                                List<Arma> armaList = new ArrayList<Arma>();
                                for(Arma armaIt : tiendaArmas.getListaArmas()){
                                    Arma arma = new Arma();
                                    arma.setNombre(armaIt.getNombre());
                                    arma.setTamanio(armaIt.getTamanio());
                                    arma.setPrecio(armaIt.getPrecio());
                                    arma.setDescripcion(armaIt.getDescripcion());
                                    arma.setRutaImagen(armaIt.getRutaImagen());
                                    arma.setIdArma(armaIt.getIdArma());
                                    arma.setTipoArmaDescripcion(armaIt.getTipoArmaDescripcion());
                                    arma.setAtaqueFisico(armaIt.getAtaqueFisico());
                                    arma.setAtaqueMagico(armaIt.getAtaqueMagico());
                                    arma.setAlcance(armaIt.getAlcance());
                                    arma.setDestreza(armaIt.getDestreza());
                                    arma.setTipoObjetoVenta(tiendaArmas.getTipo());
                                    arma.setNombreTienda(tiendaArmas.getNombreTienda());
                                    arma.setEslogan(tiendaArmas.getEslogan());
                                    armaList.add(arma);
                                }
                                request.getSession().setAttribute("nombreTienda", tiendaArmas.getNombreTienda());
                                request.getSession().setAttribute("esloganTienda", tiendaArmas.getEslogan());
                                model.addAttribute("venta", armaList);
                                return "TiendaArma";

            case "Armadura" :   TiendaArmaduras tiendaArmaduras = tiendaService.findTiendaArmaduras(tipoTienda, ubicacion);
                                List<Armadura> armaduraList = new ArrayList<>();
                                for(Armadura armaduraIt : tiendaArmaduras.getListaArmaduras()){
                                    Armadura armadura = new Armadura();
                                    armadura.setNombre(armaduraIt.getNombre());
                                    armadura.setTamanio(armaduraIt.getTamanio());
                                    armadura.setPrecioBase(armaduraIt.getPrecioBase());
                                    armadura.setDescripcion(armaduraIt.getDescripcion());
                                    armadura.setRutaImagen(armaduraIt.getRutaImagen());
                                    armadura.setIdArmadura(armaduraIt.getIdArmadura());
                                    armadura.setTipoArmaduraDescripcion(armaduraIt.getTipoArmaduraDescripcion());
                                    armadura.setCodTipoArmadura(armaduraIt.getCodTipoArmadura());
                                    armadura.setDefensaFisica(armaduraIt.getDefensaFisica());
                                    armadura.setDefensaMagica(armaduraIt.getDefensaMagica());
                                    armadura.setDestreza(armaduraIt.getDestreza());
                                    armadura.setTipoObjetoVenta(tiendaArmaduras.getTipo());
                                    armadura.setNombreTienda((tiendaArmaduras.getNombreTienda()));
                                    armadura.setEslogan(tiendaArmaduras.getEslogan());
                                    armaduraList.add(armadura);
                                }
                                request.getSession().setAttribute("nombreTienda", tiendaArmaduras.getNombreTienda());
                                request.getSession().setAttribute("esloganTienda", tiendaArmaduras.getEslogan());
                                model.addAttribute("venta", armaduraList);
                                return "TiendaArmadura";

            case "Item" :       TiendaItems tiendaItems = tiendaService.findTiendaItems(tipoTienda,ubicacion);
                                List<Item> listaItems = new ArrayList<Item>();
                                for ( Item itemIt: tiendaItems.getListaItems()){
                                    Item item = new Item();
                                    item.setNombre(itemIt.getNombre());
                                    item.setTamanio(itemIt.getTamanio());
                                    item.setPrecioBase(itemIt.getPrecioBase());
                                    item.setDescripcion(itemIt.getDescripcion());
                                    item.setRutaImagen(itemIt.getRutaImagen());
                                    item.setTipoObjetoVenta(tiendaItems.getTipo());
                                    item.setNombreTienda(tiendaItems.getNombreTienda());
                                    item.setEslogan(tiendaItems.getEslogan());
                                    listaItems.add(item);
                                }
                                request.getSession().setAttribute("nombreTienda", tiendaItems.getNombreTienda());
                                request.getSession().setAttribute("esloganTienda", tiendaItems.getEslogan());
                                model.addAttribute("venta",listaItems);
                                return "TiendaItem";

        }
        return null;
    }

    @RequestMapping(value="/comprarItem", method = RequestMethod.POST)
    @ResponseBody public String comprarItem(@RequestParam int precio, HttpServletRequest request,
                                HttpServletResponse response) {
        String mensaje="";
        SessionEntity sessionEntity = sessionPnjService.findLastEntity();
        if( precio > sessionEntity.getDinero()){
            mensaje = Constantes.NOSUFICIENTEDINERO;
            return mensaje;
        } else {
            // Restamos el precio de la compra al dinero total de los jugadores
            sessionEntity.setDinero(sessionEntity.getDinero()-precio);
            sessionPnjService.saveSession(sessionEntity);
            int dineroRestante = sessionEntity.getDinero();
            mensaje = Constantes.COMPRAOK + Constantes.ORORESTANTE + dineroRestante;
            return mensaje;
        }

    }

    @RequestMapping(value="/comprarArm", method = RequestMethod.POST)
    @ResponseBody public String comprarItem( @RequestParam int precio, @RequestParam int id, @RequestParam String tipo,
                                             HttpServletRequest request, HttpServletResponse response) {
        String mensaje= "";
        SessionEntity sessionEntity = sessionPnjService.findLastEntity();
        //Comprobamos si se dispone de dinero para realizar la compra
        if( precio > sessionEntity.getDinero()){
            mensaje = Constantes.NOSUFICIENTEDINERO;
            return mensaje;
        }
        //Como si se dispone, comprobamos el tipo de objeto que queremos comprar
        if(!tipo.isEmpty() && tipo.equals(Constantes.ARMAS)){
            // Si el arma no ha sido antes obtenida
            if(armaService.modificarEstadoRecompensa(id)){
                // Restamos el precio de la compra al dinero total de los jugadores
                sessionEntity.setDinero(sessionEntity.getDinero()-precio);
                sessionPnjService.saveSession(sessionEntity);
                int dineroRestante = sessionEntity.getDinero();
                mensaje = Constantes.COMPRAOK + Constantes.ORORESTANTE + dineroRestante;
                return mensaje;
            } else {
                //Como ya se tenía ese objeto de antes
                mensaje = Constantes.ARMAYATENEIS;
                return mensaje;
            }
        }
        //Como si se dispone de dinero, comprobamos el tipo de objeto que queremos comprar
        else if(!tipo.isEmpty() && tipo.equals(Constantes.ARMADURAS)){
            // Si la armadura no ha sido antes obtenida
            if(armaduraService.modificarEstadoRecompensa(id)){
                // Restamos el precio de la compra al dinero total de los jugadores
                sessionEntity.setDinero(sessionEntity.getDinero()-precio);
                int dineroRestante = sessionEntity.getDinero();
                sessionPnjService.saveSession(sessionEntity);
                mensaje = Constantes.COMPRAOK + Constantes.ORORESTANTE + dineroRestante;
                return mensaje;
            } else {
                //Como ya se tenía ese objeto de antes
                mensaje = Constantes.ARMADURAYATENEIS;
                return mensaje;
            }
        }
        return mensaje;
    }
}
