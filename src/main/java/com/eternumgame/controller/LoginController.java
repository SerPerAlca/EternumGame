package com.eternumgame.controller;

import com.eternumgame.service.IEnemigoService;
import com.eternumgame.service.IJugadorService;
import com.eternumgame.service.ISessionPnjService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.List;

@Controller
public class LoginController {

    @Autowired
    private ISessionPnjService sessionPnjService;

    @Autowired
    private IJugadorService jugadorService;

    @Autowired
    private IEnemigoService enemigoService;

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
    @ResponseBody
    public int registrarJugador(@RequestParam String personaje, @RequestParam String alias, HttpServletRequest request,
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








}
