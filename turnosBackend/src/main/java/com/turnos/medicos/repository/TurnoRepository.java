
package com.turnos.medicos.repository;

import com.turnos.medicos.model.Turno;
import org.springframework.data.jpa.repository.JpaRepository;


public interface TurnoRepository extends JpaRepository<Turno, Long> {
    
}
