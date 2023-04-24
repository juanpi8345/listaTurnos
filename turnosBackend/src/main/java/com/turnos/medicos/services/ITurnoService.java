
package com.turnos.medicos.services;

import com.turnos.medicos.model.Turno;
import java.util.List;
import java.util.Optional;


public interface ITurnoService {
    
    public String añadirTurno(Turno turno);
    public List<Turno> obtenerTurnos();
    public Turno obtenerTurno(Long id);
    public void eliminarTurno(Long id);
    
}
