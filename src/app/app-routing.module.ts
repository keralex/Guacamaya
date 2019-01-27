import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './navigation/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { VuelosDisponiblesComponent } from './components/vuelos-disponibles/vuelos-disponibles.component';
import { VentaPasajeComponent } from './components/venta-pasaje/venta-pasaje.component';
import { DatosPasajeroComponent } from './components/datos-pasajero/datos-pasajero.component';
import { CompraComponent } from './components/compra/compra.component';
import { VentaComponent } from './navigation/venta/venta.component';

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

}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
