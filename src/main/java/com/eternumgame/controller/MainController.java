package com.eternumgame.controller;

import com.eternumgame.domain.Enemigo;
import com.eternumgame.domain.util.UtilidadesEnemigos;
import com.eternumgame.service.IArmaduraService;
import com.eternumgame.service.IEnemigoService;
import com.eternumgame.service.IJugadorService;
import com.eternumgame.service.ISessionPnjService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
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
	@RequestMapping(value = "/pruebaAJAX", method = RequestMethod.GET)
	public String probarAJAX() {
		return "pruebaFight";
	}


	// Controlador encargado de devolver el enemigo al que se enfrentarán los jugadores
	@RequestMapping(value = "/calcularEnemigos", method = RequestMethod.POST)
	@ResponseBody public Enemigo  calcularEnemigos(@RequestParam int jugadores, @RequestParam int id) {
		System.out.println("JUGADORES: " + jugadores + " ID: " + id);
		// Obtengo la lista de enemigos disponibles en esa zona
		List <Enemigo> listaEnemigos = enemigoService.findEnemyFromZone(id);
		// Se escoge aleatoriamente a uno de esos enemigos (teniendo en cuenta la probabilidad de aparicion)
		Enemigo enemigo = utilidadesEnemigos.enemigoRandom(listaEnemigos);
		// Obtenemos el numero de enemigos de ese tipo que van a salir
		utilidadesEnemigos.calcularNumEnemigos(enemigo,jugadores);
		return enemigo;
	}

	//********************************************************************************
	@RequestMapping(value = "/viajeCampaña", method = RequestMethod.GET)
	public String mostrarViaje() {
		return "viajeCampaña";
	}




	/******************** L O G I N ***********************************************/
	@RequestMapping(value = "/registrarNumeroJugadores", method = RequestMethod.GET)
	public String login() {
		return "NumPnj";
	}

	@RequestMapping(value="/registroJugadores", method = RequestMethod.POST)
	public String registrarNumeroJugadores(@RequestParam int playersNumbers, HttpServletRequest request,
								   HttpServletResponse response, Model model){

		request.getSession().setAttribute("numeroJugadores", playersNumbers);
		int jugadorActual = 1;
		request.getSession().setAttribute("jugadorActual", jugadorActual);
		try{
			sessionPnjService.saveSession(playersNumbers);
			List<String> heroesList = enemigoService.findHeroesFromJson();
			if(null != heroesList){
				model.addAttribute("heroes", heroesList);
			}
		}catch (Exception e){
			e.printStackTrace();
		}

		return "SeleccionHeroe";
	}

	// Controller AJAX
	@RequestMapping(value="/registrarHeroe", method = RequestMethod.POST)
	@ResponseBody public int registrarJugador(@RequestParam String personaje, @RequestParam String alias, HttpServletRequest request,
								   HttpServletResponse response, Model model) {
		//Obtenemos cuantos jugadores quedan por elegir heroe
		int numeroJugadores = (int) request.getSession().getAttribute("numeroJugadores");
		try{
			// Guardamos Jugador en BD
			jugadorService.savePlayer(personaje, alias, numeroJugadores);
			numeroJugadores--;
			request.getSession().setAttribute("numeroJugadores", numeroJugadores);

			//Obtenemos el jugador Actual
			int jugadorActual = (int) request.getSession().getAttribute("jugadorActual");
			jugadorActual++;
			request.getSession().setAttribute("jugadorActual", jugadorActual);

		}catch(Exception e){
			e.printStackTrace();
		}
		// Devolvemos el número de jugadores que quedan por elegir al Front
		return numeroJugadores;
	}

	/*********************************************************************************************/



}