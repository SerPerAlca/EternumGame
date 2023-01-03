package com.eternumgame.controller;

import com.eternumgame.domain.Enemigo;
import com.eternumgame.service.IEnemigoService;
import org.json.simple.parser.ParseException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.io.IOException;
import java.util.List;

//@Controller
@SpringBootApplication
@Controller
public class MainController {

	@Autowired
	private IEnemigoService enemigoService;

	@RequestMapping(value = "/", method = RequestMethod.GET)
	public String index() {
		return "Historia";
	}

	@RequestMapping(value = "/prueba", method = RequestMethod.GET)
	public String prueba() {
		return "prueba";
	}

	@RequestMapping(value = "/itinerar", method = RequestMethod.GET)
	public String Mapas() {
		return "mapas";
	}

	@RequestMapping(value = "/dado", method = RequestMethod.GET)
	public String tirarDado() {
		return "Dado";
	}

	@RequestMapping(value = "/viajeCampaña", method = RequestMethod.GET)
	public String mostrarViaje() {
		return "viajeCampaña";
	}

	@RequestMapping(value = "/listarEnemigos", method = RequestMethod.GET)
	public String listarEnemigos(Model model) {
		List<Enemigo> enemigoLista = enemigoService.findAllEnemys();
		model.addAttribute("enemigos", enemigoLista);
		return "listadoEnemigos";
	}

	@RequestMapping(value = "/seleccionPNJ", method = RequestMethod.GET)
	public String seleccionarPNJ(Model model) throws IOException, ParseException {
		List<String> heroesList = enemigoService.findHeroesFromJson();
		//enemigoService.crearFichero();
		if(null != heroesList){
			model.addAttribute("heroes", heroesList);
		}
		return "seleccionPNJ";
	}

}