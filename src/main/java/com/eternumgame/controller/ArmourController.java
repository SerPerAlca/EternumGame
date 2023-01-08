package com.eternumgame.controller;

import com.eternumgame.domain.Armadura;
import com.eternumgame.service.IArmaduraService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.util.List;

@Controller
public class ArmourController {

    @Autowired
    private IArmaduraService armaduraService;

    @RequestMapping(value = "/listarArmadura", method = RequestMethod.GET)
    public String listarArmaduras(Model model) {
        List<Armadura> armaduraList = armaduraService.findAllArmour();
        armaduraService.ordenarPorTipo(armaduraList);
        model.addAttribute("armaduras", armaduraList);
        return "listadoArmaduras";
    }

}
