
package com.turnos.medicos.services;

import com.turnos.medicos.model.Turno;
import com.turnos.medicos.repository.TurnoRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import static org.springframework.data.jpa.domain.AbstractPersistable_.id;
import org.springframework.stereotype.Service;

@Service
public class TurnoService implements ITurnoService {
    
    @Autowired
    private TurnoRepository repo;

    @Override
    public String añadirTurno(Turno turno) {
        repo.save(turno);
        return "Turno añadido con exito";
    }
    
    @Override
    public List<Turno> obtenerTurnos(){
        List<Turno> turnos = repo.findAll();
        return turnos;
    }
    
    @Override
    public Turno obtenerTurno(Long id){
        return repo.findById(id).orElse(null);
    }
    
    @Override
    public void eliminarTurno(Long id){
        repo.deleteById(id);
    }

    
}
