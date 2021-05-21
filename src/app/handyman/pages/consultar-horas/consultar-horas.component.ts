import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-consultar-horas',
  templateUrl: './consultar-horas.component.html',
  styleUrls: ['./consultar-horas.component.css']
})
export class ConsultarHorasComponent implements OnInit {



  @ViewChild('miFormulario') miFormulario!: NgForm;

  constructor() { }

  ngOnInit(): void {
  }

  nombreValido(): boolean {
    return this.miFormulario?.controls.idTecnico?.invalid &&
           this.miFormulario?.controls.idTecnico.touched
  }

  numValido(): boolean{
     return this.miFormulario?.controls.numSemana?.invalid &&
            this.miFormulario?.controls.numSemana?.touched
  }

  //consultar( miFormulario: NgForm)
  consultar( ){
    //console.log( this.miFormulario);
    console.log( 'Consulta exitosa');

    this.miFormulario.resetForm();

  }

}
