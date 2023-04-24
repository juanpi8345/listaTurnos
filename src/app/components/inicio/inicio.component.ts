import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TurnosServiceService } from 'src/app/services/turnos-service.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  form:FormGroup;

  nombre:string = "";
  fecha:any;
  hora:string="";
  descripcion:string="";
  valid:any;



  constructor(private formBuilder: FormBuilder, private service:TurnosServiceService) {
    this.form = this.formBuilder.group({
      nombre:["",Validators.required],
      fecha:["",Validators.required],
      hora:["",Validators.required],
      descripcion:["",Validators.required]
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

  enviarForm(event:Event):void{
    event.preventDefault;
    if(this.form.valid){
      this.valid = true;
      this.service.añadirTurno(this.form.value).subscribe();
      this.form.reset();
    }else{
      this.valid = false;
    }
  }

}
