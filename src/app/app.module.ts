import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { HttpClientModule } from '@angular/common/http';
import { VerTurnosComponent } from './components/ver-turnos/ver-turnos.component';
import { EditarTurnoComponent } from './components/editar-turno/editar-turno.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InicioComponent,
    VerTurnosComponent,
    EditarTurnoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
