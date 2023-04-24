package com.turnos.medicos.controller;

import com.turnos.medicos.model.Turno;
import com.turnos.medicos.services.ITurnoService;
import java.time.LocalDate;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TurnoController {

    @Autowired
    ITurnoService service;
    
    @CrossOrigin(origins = "http://localhost:4200/")
    @GetMapping("ver-turnos")
    public List<Turno> obtenerTurnos(){
        return service.obtenerTurnos();
    }
    
    @CrossOrigin(origins = "http://localhost:4200/")
    @PostMapping("/inicio")
    public void agregarTurno(@RequestBody Turno turno){
        service.añadirTurno(turno);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @PutMapping("editar-turno/{id}")
    public void editarTurno(@PathVariable Long id, @RequestBody Turno turno){
        Turno  turnoAEditar= service.obtenerTurno(id);
        turnoAEditar.setNombre(turno.getNombre());
        turnoAEditar.setFecha(turno.getFecha());
        turnoAEditar.setHora(turno.getHora());
        turnoAEditar.setDescripcion(turno.getDescripcion());
        service.añadirTurno(turnoAEditar);
        
    }
    
     @CrossOrigin(origins = "http://localhost:4200")
    @DeleteMapping("ver-turnos/{id}")
    public void eliminarTurno(@PathVariable  Long id){
        service.eliminarTurno(id);
    }
}
