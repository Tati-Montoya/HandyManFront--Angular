import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultarHorasComponent } from './handyman/pages/consultar-horas/consultar-horas.component';
import { ReporteServicioComponent } from './handyman/pages/reporte-servicio/reporte-servicio.component';
import { HomeComponent } from './handyman/pages/home/home.component';


const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        pathMatch: 'full'
    },
    {
        path: 'consultar-horas',
        component: ConsultarHorasComponent,
    },
    {
        path: 'reporte-servicio',
        component: ReporteServicioComponent

    },
    {
        path: '**',
        redirectTo: ''
    }
]


@NgModule({
    imports:[
        RouterModule.forRoot( routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}