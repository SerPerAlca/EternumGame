package com.eternumgame.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
public class MainController {
	
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

}