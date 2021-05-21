import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ConsultarHorasComponent } from './pages/consultar-horas/consultar-horas.component';
import { ReporteServicioComponent } from './pages/reporte-servicio/reporte-servicio.component';
import { HomeComponent } from './pages/home/home.component';




@NgModule({
  declarations: [
    ConsultarHorasComponent,
    ReporteServicioComponent,
    HomeComponent
  ],
  exports: [
    ConsultarHorasComponent,
    ReporteServicioComponent

  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class HandymanModule { }
