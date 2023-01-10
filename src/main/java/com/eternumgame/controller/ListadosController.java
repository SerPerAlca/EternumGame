package com.eternumgame.controller;

import com.eternumgame.domain.Armadura;
import com.eternumgame.domain.Enemigo;
import com.eternumgame.domain.Item;
import com.eternumgame.service.IArmaduraService;
import com.eternumgame.service.IEnemigoService;
import com.eternumgame.service.IItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.util.List;

@Controller
public class ListadosController {

    @Autowired
    private IArmaduraService armaduraService;

    @Autowired
    private IEnemigoService enemigoService;

    @Autowired
    private IItemService iItemService;

    // VISTA PRINCIPAL DE LISTADOS
    @RequestMapping(value = "/listarElementos", method = RequestMethod.GET)
    public String listarElementos() {
        return "Listados";
    }



    // ARMADURAS
    @RequestMapping(value = "/listarArmadura", method = RequestMethod.GET)
    public String listarArmaduras(Model model) {
        List<Armadura> armaduraList = armaduraService.findAllArmour();
        armaduraService.ordenarPorTipo(armaduraList);
        model.addAttribute("armaduras", armaduraList);
        return "ListadoArmaduras";
    }

    // LISTADO DE ENEMIGOS
    @RequestMapping(value = "/listarEnemigos", method = RequestMethod.GET)
    public String listarEnemigos(Model model) {
        List<Enemigo> enemigoLista = enemigoService.findAllEnemys();
        model.addAttribute("enemigos", enemigoLista);
        return "ListadoEnemigos";
    }

    // LISTADO DE ITEMS
    @RequestMapping(value = "/listarItems", method = RequestMethod.GET)
    public String listarItems(Model model) {
        List<Item> itemList = iItemService.findAllItems();
        model.addAttribute("items", itemList);
        return "ListadoItems";
    }
}
