import { Component } from '@angular/core';
import { TurnosServiceService } from 'src/app/services/turnos-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-ver-turnos',
  templateUrl: './ver-turnos.component.html',
  styleUrls: ['./ver-turnos.component.css']
})
export class VerTurnosComponent{
  data:any;

  constructor(private service:TurnosServiceService,  private router:Router){}

  ngOnInit(){
    this.service.obtenerTurnos().subscribe(data=>{
      this.data = data;
    })
  }

  eliminarTurno(event:Event, id:any):void{
    event.preventDefault;
    this.service.eliminarTurno(id);
    location.reload();
  }

  
    
  
}


