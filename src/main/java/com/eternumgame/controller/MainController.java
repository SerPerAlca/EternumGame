package com.eternumgame.controller;

import com.eternumgame.domain.Enemigo;
import com.eternumgame.domain.util.UtilidadesEnemigos;
import com.eternumgame.service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.List;

//@Controller
@SpringBootApplication
@Controller
public class MainController {

	@Autowired
	private IEnemigoService enemigoService;

	@Autowired
	private UtilidadesEnemigos utilidadesEnemigos;

	@Autowired
	private ISessionPnjService sessionPnjService;

	@Autowired
	private IJugadorService jugadorService;

	@Autowired
	private IArmaduraService armaduraService;

	@Autowired
	private IArmaService armaService;

	@Autowired
	private IItemService itemService;

	// PROLOGO
	@RequestMapping(value = "/prologo", method = RequestMethod.GET)
	public String prologo() {
		return "Prologo";
	}

	// CAPITULOS
	@RequestMapping(value = "/historia", method = RequestMethod.GET)
	public String index() {
		return "Historia";
	}

	// PAGINA PRINCIPAL
	@RequestMapping(value= "/", method = RequestMethod.GET)
	public String home() { return "Home"; }

	// PROTOTIPO MAPA DE CAMPAÑA
	@RequestMapping(value = "/itinerar", method = RequestMethod.GET)
	public String mapaCampaña() {
		return "MapaCampania";
	}

	@RequestMapping(value = "/cabecera", method = RequestMethod.GET)
	public String cabecera() {
		return "Cabecera";
	}



	// CODIGO DE PRUEBA *************************************************************
	@RequestMapping(value = "/fight", method = RequestMethod.GET)
	public String fight() {
		return "Fight";
	}



	// Controlador encargado de devolver el enemigo al que se enfrentarán los jugadores
	@RequestMapping(value = "/calcularEnemigos", method = RequestMethod.POST)
	@ResponseBody public Enemigo  calcularEnemigos(@RequestParam String zona, HttpServletRequest request,
												   HttpServletResponse response) {
		int numeroJugadores = 0;
		if (null != request.getSession().getAttribute("numeroJugadores")){
			// Obtenemos el número de jugadores del Login
			numeroJugadores = (int) request.getSession().getAttribute("numeroJugadores");
		} else {
			// Establecemos directamente a 4 jugadores para las pruebas
			numeroJugadores = 4;
		}
		System.out.println("Número de Jugadores: " + numeroJugadores + ", ID del Lugar: " + zona);

		// Obtengo la lista de enemigos disponibles en esa zona
		List <Enemigo> listaEnemigos = enemigoService.findEnemyFromZone(zona);

		// Se escoge aleatoriamente a uno de esos enemigos (teniendo en cuenta la probabilidad de aparicion)
		Enemigo enemigo = utilidadesEnemigos.enemigoRandom(listaEnemigos);

		// Obtenemos el numero de enemigos de ese tipo que van a salir
		//utilidadesEnemigos.calcularNumEnemigos(enemigo,numeroJugadores);

 		return enemigo;
	}
	// Controlador encargado de devolver el enemigo al que se enfrentarán los jugadores
	@RequestMapping(value = "/combateJefe", method = RequestMethod.POST)
	@ResponseBody public Enemigo  combateJefe(@RequestParam String jefe, HttpServletRequest request,
												   HttpServletResponse response) {

		// Obtenemos el enemigo que buscamos
		Enemigo enemigo = enemigoService.findEnemyByName(jefe);
		return enemigo;
	}

	//********************************************************************************
	@RequestMapping(value = "/viajeCampaña", method = RequestMethod.GET)
	public String mostrarViaje() {
		return "viajeCampaña";
	}


	@RequestMapping(value = "/obtenerRecompensa", method = RequestMethod.POST)
	@ResponseBody public Object  obtenerRecompensa(@RequestParam String zona, HttpServletRequest request,
												   HttpServletResponse response) {
		// generamos un numero random
		Object object = new Object();
		do {
			int indexRandom = (int)(Math.random()*20);
			switch (indexRandom){
				case 7: object = armaService.getArmaRecompensa();
					break;
				case 11: object = armaduraService.getArmaduraRecompensa();
					break;
				default: object = itemService.getOneItem();
					break;
			}
		} while (object == null);

		return object;
	}

	@RequestMapping(value = "/perderDinero", method = RequestMethod.POST)
	@ResponseBody public int perderDinero(@RequestParam int cantidad, HttpServletRequest request,
												   HttpServletResponse response) {

		sessionPnjService.perderDinero(cantidad);
		return cantidad;
	}

	@RequestMapping(value = "/ganarDinero", method = RequestMethod.POST)
	@ResponseBody public int ganarDinero(@RequestParam int cantidad, HttpServletRequest request,
										  HttpServletResponse response) {

		sessionPnjService.ganarDinero(cantidad);
		return cantidad;
	}
}