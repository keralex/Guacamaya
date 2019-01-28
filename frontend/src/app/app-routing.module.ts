import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './navigation/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { VuelosDisponiblesComponent } from './components/vuelos-disponibles/vuelos-disponibles.component';
import { VentaPasajeComponent } from './components/venta-pasaje/venta-pasaje.component';
import { DatosPasajeroComponent } from './components/datos-pasajero/datos-pasajero.component';
import { CompraComponent } from './components/compra/compra.component';
import { VentaComponent } from './navigation/venta/venta.component';
import { RegistroAbordarComponent } from './components/registro-abordar/registro-abordar.component';
import { AsientoComponent } from './components/asiento/asiento.component';
import { EquipajeComponent } from './components/equipaje/equipaje.component';
import { CheckInComponent } from './navigation/check-in/check-in.component';
import { AsignarVueloComponent } from './components/asignar-vuelo/asignar-vuelo.component';
import { HotelComponent } from './components/hotel/hotel.component';
import { ManifiestoComponent } from './components/manifiesto/manifiesto.component';
import { DevolucionComponent } from './components/devolucion/devolucion.component';
import { AsignarVueloSobreventaComponent } from './components/asignar-vuelo-sobreventa/asignar-vuelo-sobreventa.component';

const routes: Routes = [
  // home
{
  path:'',
  children:[
  {path:'',redirectTo:'/home',pathMatch:'full'},
   {path:'home',component:LoginComponent}
   ],  component:HomeComponent
},
// ventas
{
  path:'ventas',
  children:[
    {path:'',redirectTo:'vuelos',pathMatch:'full'},
    {path:'vuelos',component:VuelosDisponiblesComponent},
    {path:'ventaPasaje',component:VentaPasajeComponent},
    {path:'ventaPasaje/registroPasajeros',component:DatosPasajeroComponent},
    {path:'ventaPasaje/registroPasajeros/compra',component:CompraComponent}
  ],component:VentaComponent

},
// check-in
{
  path:'check_in',
  children:[
    {path:'',redirectTo:'check_in_abordar',pathMatch:'full'},
    {path:'check_in_abordar',component:RegistroAbordarComponent},
    {path:'check_in_abordar/asientos',component:AsientoComponent},
    {path:'check_in_abordar/asientos/equipaje',component:EquipajeComponent},
    {path:'Asignar_vuelo',component:AsignarVueloComponent},
    {path:'Asignar_vuelo_sobreventa',component:AsignarVueloSobreventaComponent},
    {path:'hotel',component:HotelComponent},
    {path:'manifiesto',component:ManifiestoComponent},
    {path:'devolucion',component:DevolucionComponent}
  ],component:CheckInComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
