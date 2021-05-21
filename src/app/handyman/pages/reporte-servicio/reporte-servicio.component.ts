import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-reporte-servicio',
  templateUrl: './reporte-servicio.component.html',
  styleUrls: ['./reporte-servicio.component.css']
})
export class ReporteServicioComponent implements OnInit {

  @ViewChild('miFormulario') miFormulario!: NgForm;

  constructor() { }

  ngOnInit(): void {
  }

  idValido(): boolean {
    return this.miFormulario?.controls.idTecnico?.invalid && 
           this.miFormulario?.controls.idTecnico.touched
  }

  servicioValido(): boolean {
    return this.miFormulario?.controls.idServicio?.invalid && 
           this.miFormulario?.controls.idServicio.touched
  }

  


  Guardar( miFormulario: NgForm ){
    console.log(this.miFormulario)

  }

}
