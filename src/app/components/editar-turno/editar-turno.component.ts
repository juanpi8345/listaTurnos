import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TurnosServiceService } from 'src/app/services/turnos-service.service';
import {ActivatedRoute,Router} from '@angular/router';


@Component({
  selector: 'app-editar-turno',
  templateUrl: './editar-turno.component.html',
  styleUrls: ['./editar-turno.component.css']
})
export class EditarTurnoComponent {
  form:FormGroup;

  id:number = 0;
  nombre:string = "";
  fecha:any;
  hora:string="";
  descripcion:string="";
  valid:any;

  constructor(private formBuilder: FormBuilder, private service:TurnosServiceService, private route:ActivatedRoute, private router:Router) {
    this.form = this.formBuilder.group({
      nombre:["",Validators.required],
      fecha:["",Validators.required],
      hora:["",Validators.required],
      descripcion:["",Validators.required]
    })
  }

  ngOnInit(){
    this.id = this.route.snapshot.params['id'];
    this.service.obtenerTurnos().subscribe(data=>{
      for(let item of data){
        if(item.id == this.id){
          this.nombre = item.nombre;
          this.fecha = item.fecha;
          this.hora = item.hora;
          this.descripcion =item.descripcion;
        }
      }
    })
 
  }

  getNombre(){
    return this.form.get('nombre');
  }

  getFecha(){
    return this.form.get('fecha');
  }

  getHora(){
    return this.form.get('hora');
  }

  getDescripcion(){
    return this.form.get('descripcion');
  }

  actualizar(event:Event):void{
    event.preventDefault;
    if(this.form.valid){
      this.valid = true;
      this.service.actualizarTurno(this.id,this.form.value);
      this.form.reset();
      this.router.navigate(['ver-turnos']);
    }else{
      this.valid = false;
    }
  }

}
