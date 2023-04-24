import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TurnosServiceService {

  apiUrl:String = "http://localhost:8080/";
  apiEditar:String = "http://localhost:8080/editar-turno/";

  constructor(private http:HttpClient) {
   
  }

  añadirTurno(credenciales:any):Observable<any>{
    console.log(credenciales);
    return this.http.post(this.apiUrl + "inicio",credenciales);
  }

  actualizarTurno(id:any,credenciales:any){
    return this.http.put(this.apiEditar + id,credenciales,{}).subscribe();
  }

  obtenerTurnos():Observable<any>{
    return this.http.get(this.apiUrl+ "ver-turnos");
  }

  eliminarTurno(id:any){
    return this.http.delete(this.apiUrl+"ver-turnos/"+id).subscribe();
  }

}
