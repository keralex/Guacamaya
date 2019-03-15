import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './navigation/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { VuelosDisponiblesComponent } from './components/ventas/vuelos-disponibles/vuelos-disponibles.component';
import { VentaPasajeComponent } from './components/ventas/venta-pasaje/venta-pasaje.component';
import { DatosPasajeroComponent } from './components/ventas/datos-pasajero/datos-pasajero.component';
import { CompraComponent } from './components/ventas/compra/compra.component';
import { VentaComponent } from './navigation/venta/venta.component';
import { AsientoComponent } from './components/check_in/asiento/asiento.component';
import { EquipajeComponent } from './components/check_in/equipaje/equipaje.component';
import { CheckInComponent } from './navigation/check-in/check-in.component';
import { HotelComponent } from './components/check_in/hotel/hotel.component';
import { ManifiestoComponent } from './components/check_in/manifiesto/manifiesto.component';
import { DevolucionComponent } from './components/check_in/devolucion/devolucion.component';
import { AsignarVueloSobreventaComponent } from './components/check_in/asignar-vuelo-sobreventa/asignar-vuelo-sobreventa.component';
import { PasajerosAbordoComponent } from './components/check_in/pasajeros-abordo/pasajeros-abordo.component';
import { PasajesVendidosComponent } from './components/ventas/pasajes-vendidos/pasajes-vendidos.component';
import { ListaEmpleadosComponent } from './components/EmpleadosComponent/lista-empleados/lista-empleados.component';
import { ListaUsuariosSistemaComponent } from './components/UsuariosComponent/lista-usuarios-sistema/lista-usuarios-sistema.component';
import { GerenteComponent } from './navigation/gerente/gerente.component';
import { PlanificarVueloComponent } from './components/vuelosComponent/planificar-vuelo/planificar-vuelo.component';
import { RegistrarAvionesComponent } from './components/AvionesComponent/registrar-aviones/registrar-aviones.component';
import { ModificarEstadoAvionesComponent } from './components/AvionesComponent/modificar-estado-aviones/modificar-estado-aviones.component';
import { ProveedoresComponent } from './components/vuelosCharterComponent/proveedores/proveedores.component';
import { AlquilarAvionComponent } from './components/vuelosCharterComponent/alquilar-avion/alquilar-avion.component';
import { RegistroFallasComponent } from './components/MantenimientoComponent/registro-fallas/registro-fallas.component';
import { AsignarMantenimientoComponent } from './components/MantenimientoComponent/asignar-mantenimiento/asignar-mantenimiento.component';
import { AdminVueloComponent } from './navigation/admin-vuelo/admin-vuelo.component';
import { EliminarPasajeroComponent } from './components/PasajerosComponent/eliminar-pasajero/eliminar-pasajero.component';
import { ModificarPasajeComponent } from './components/PasajerosComponent/modificar-pasaje/modificar-pasaje.component';
import { ProgramasVueloComponent } from './components/vuelosComponent/programas-vuelo/programas-vuelo.component';
import { GenerarProgramaVueloComponent } from './components/vuelosComponent/generar-programa-vuelo/generar-programa-vuelo.component';
import { EliminarProgramaVueloComponent } from './components/vuelosComponent/eliminar-programa-vuelo/eliminar-programa-vuelo.component';
import { ModificarProgramaVueloComponent } from './components/vuelosComponent/modificar-programa-vuelo/modificar-programa-vuelo.component';
import { AsignarVueloComponent } from './components/check_in/asignar-vuelo/asignar-vuelo.component';
import { RegistrarPasajeroComponent } from './components/check_in/registrar-pasajero/registrar-pasajero.component';
import { EliminarVueloComponent } from './components/vuelosComponent/eliminar-vuelo/eliminar-vuelo.component';
import { ModificarVueloComponent } from './components/vuelosComponent/modificar-vuelo/modificar-vuelo.component';
import { VuelosComponent } from './components/vuelosComponent/vuelos/vuelos.component';
import { RegistrarRutaComponent } from './components/rutaComponents/registrar-ruta/registrar-ruta.component';
import { EliminarRutaComponent } from './components/rutaComponents/eliminar-ruta/eliminar-ruta.component';
import { ModificarRutaComponent } from './components/rutaComponents/modificar-ruta/modificar-ruta.component';
import { RutasComponent } from './components/rutaComponents/rutas/rutas.component';
import { ModificarAvionComponent } from './components/AvionesComponent/modificar-avion/modificar-avion.component';
import { EliminarAvionComponent } from './components/AvionesComponent/eliminar-avion/eliminar-avion.component';
import { AvionesComponent } from './components/AvionesComponent/aviones/aviones.component';
import { RegistrarAeropuertoComponent } from './components/aeropuertoComponents/registrar-aeropuerto/registrar-aeropuerto.component';
import { EliminarAeropuertoComponent } from './components/aeropuertoComponents/eliminar-aeropuerto/eliminar-aeropuerto.component';
import { ModificarAeropuertoComponent } from './components/aeropuertoComponents/modificar-aeropuerto/modificar-aeropuerto.component';
import { AeropuertosComponent } from './components/aeropuertoComponents/aeropuertos/aeropuertos.component';
import { RegistrarPistaComponent } from './components/aeropuertoComponents/registrar-pista/registrar-pista.component';
import { EliminarPistaComponent } from './components/aeropuertoComponents/eliminar-pista/eliminar-pista.component';
import { ModificarPistaComponent } from './components/aeropuertoComponents/modificar-pista/modificar-pista.component';
import { PistasComponent } from './components/aeropuertoComponents/pistas/pistas.component';

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
    {path:'',redirectTo:'ventaPasaje',pathMatch:'full'},
    {path:'vuelos',component:VuelosDisponiblesComponent},
    {path:'ventaPasaje',component:VentaPasajeComponent},
    {path:'ventaPasaje/registroPasajeros',component:DatosPasajeroComponent},
    {path:'ventaPasaje/registroPasajeros/compra',component:CompraComponent},
    {path:'pasajes',component:PasajesVendidosComponent},
    {path:'eliminar_pasajero',component:EliminarPasajeroComponent},
    {path:'modificar_pasajero',component:ModificarPasajeComponent 
  },
  ],component:VentaComponent
},
// check-in
{
  path:'check_in',
  children:[
    {path:'',redirectTo:'check_in_abordar',pathMatch:'full'},
    {path:'check_in_abordar',component:RegistrarPasajeroComponent},
    {path:'check_in_abordar/asientos',component:AsientoComponent},
    {path:'check_in_abordar/asientos/equipaje',component:EquipajeComponent},
    {path:'Asignar_vuelo',component:AsignarVueloComponent},
    {path:'Asignar_vuelo_sobreventa',component:AsignarVueloSobreventaComponent},
    {path:'hotel',component:HotelComponent},
    {path:'manifiesto',component:ManifiestoComponent},
    {path:'devolucion',component:DevolucionComponent},
    {path:'pasajeros_abordo',component:PasajerosAbordoComponent}
  ],component:CheckInComponent
},


//gerente general
{
  path:'gerente_general',
  children:[
    {path:'', redirectTo:'lista_empleados',pathMatch:'full'},
    {path:'lista_empleados',component:ListaEmpleadosComponent},
    {path:'usuarios',component:ListaUsuariosSistemaComponent},
  ],component:GerenteComponent},



//administrador de vuelo

{path:'admin_vuelo',
children:[
  {path:'',redirectTo:'planificar',pathMatch:'full'},
  //aviones
  {path:'registrar_avion',component:RegistrarAvionesComponent},
  {path:'modificar_estado_aviones',component:ModificarEstadoAvionesComponent},
  {path:'modificarAvion',component:ModificarAvionComponent},
  {path:'eliminarAvion',component:EliminarAvionComponent},
  {path:'aviones',component:AvionesComponent},


  //alquiler
  {path:'proveedores',component:ProveedoresComponent},
  {path:'alquilar_avion',component:AlquilarAvionComponent},
  //Mantenimiento
  {path:'registro_fallas',component:RegistroFallasComponent},
  {path:'asignar_mantenimiento',component:AsignarMantenimientoComponent},
  //Vuelos
  {path:'programa_vuelos', component:ProgramasVueloComponent},
  {path:'generar_programa', component:GenerarProgramaVueloComponent},
  {path:'eliminar_programa', component:EliminarProgramaVueloComponent},
  {path:'modificar_programa', component:ModificarProgramaVueloComponent},
  {path:'planificar',component:PlanificarVueloComponent},
  {path:'eliminar_vuelo', component:EliminarVueloComponent},
  {path:'modificar_vuelo', component:ModificarVueloComponent},
  {path:'vuelos', component:VuelosComponent},
  //rutas
  {path:'registrarRuta', component:RegistrarRutaComponent},
  {path:'eliminarRuta', component:EliminarRutaComponent},
  {path:'modificarRuta', component:ModificarRutaComponent},
  {path:'rutas', component:RutasComponent},
  //Aeropuerto
  {path:'registrarAeropuerto', component:RegistrarAeropuertoComponent},
  {path:'eliminarAeropuerto', component:EliminarAeropuertoComponent},
  {path:'modificarAeropuerto', component:ModificarAeropuertoComponent},
  {path:'aeropuertos', component:AeropuertosComponent},
  //Pista
  {path:'registrarPista', component:RegistrarPistaComponent},
  {path:'eliminarPista', component:EliminarPistaComponent},
  {path:'modificarPista', component:ModificarPistaComponent},
  {path:'pistas', component:PistasComponent},

],component:AdminVueloComponent
},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
