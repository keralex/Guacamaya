import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './navigation/home/home.component';
import { CheckInComponent } from './navigation/check-in/check-in.component';
import { AdminComponent } from './navigation/admin/admin.component';
import { AdminVueloComponent } from './navigation/admin-vuelo/admin-vuelo.component';
import { GerenteComponent } from './navigation/gerente/gerente.component';
import { VentaComponent } from './navigation/venta/venta.component';
import { NavbarHomeComponent } from './navbars/navbar-home/navbar-home.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { VentaPasajeComponent } from './components/venta-pasaje/venta-pasaje.component';
import { VuelosDisponiblesComponent } from './components/vuelos-disponibles/vuelos-disponibles.component';
import { DatosPasajeroComponent } from './components/datos-pasajero/datos-pasajero.component';
import { CompraComponent } from './components/compra/compra.component';
import { NavbarVentaComponent } from './navbars/navbar-venta/navbar-venta.component';
import { AsientoComponent } from './components/asiento/asiento.component';
import { RegistroAbordarComponent } from './components/registro-abordar/registro-abordar.component';
import { EquipajeComponent } from './components/equipaje/equipaje.component';
import { AsignarVueloComponent } from './components/asignar-vuelo/asignar-vuelo.component';
import { DevolucionComponent } from './components/devolucion/devolucion.component';
import { ManifiestoComponent } from './components/manifiesto/manifiesto.component';
import { HotelComponent } from './components/hotel/hotel.component';
import { NavbarCheckInComponent } from './navbars/navbar-check-in/navbar-check-in.component';
import { AsignarVueloSobreventaComponent } from './components/asignar-vuelo-sobreventa/asignar-vuelo-sobreventa.component';
import { PasajerosAbordoComponent } from './components/pasajeros-abordo/pasajeros-abordo.component';
import { PasajesVendidosComponent } from './components/pasajes-vendidos/pasajes-vendidos.component';
import { PasajerosService } from './services/pasajeros.service';
import { NavbarAdminGeneralComponent } from './navbars/navbar-admin-general/navbar-admin-general.component';
import { ListaEmpleadosComponent } from './components/lista-empleados/lista-empleados.component';
import { ListaUsuariosSistemaComponent } from './components/lista-usuarios-sistema/lista-usuarios-sistema.component';
import { NavbarGerenteComponent } from './navbars/navbar-gerente/navbar-gerente.component';
import { NavbarAdminComponent } from './navbars/navbar-admin/navbar-admin.component';
import { PlanificarVueloComponent } from './components/planificar-vuelo/planificar-vuelo.component';
import { RegistrarAvionesComponent } from './components/registrar-aviones/registrar-aviones.component';
import { AsignarRutaComponent } from './components/asignar-ruta/asignar-ruta.component';
import { ModificarEstadoAvionesComponent } from './components/modificar-estado-aviones/modificar-estado-aviones.component';
import { ProveedoresComponent } from './components/proveedores/proveedores.component';
import { AlquilarAvionComponent } from './components/alquilar-avion/alquilar-avion.component';
import { RegistroFallasComponent } from './components/registro-fallas/registro-fallas.component';
import { AsignarMantenimientoComponent } from './components/asignar-mantenimiento/asignar-mantenimiento.component';
import { ModificarPasajeComponent } from './components/modificar-pasaje/modificar-pasaje.component';
import { EliminarPasajeroComponent } from './components/eliminar-pasajero/eliminar-pasajero.component';
import { ProgramasVueloComponent } from './components/programas-vuelo/programas-vuelo.component';
import { GenerarProgramaVueloComponent } from './components/generar-programa-vuelo/generar-programa-vuelo.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CheckInComponent,
    AdminComponent,
    AdminVueloComponent,
    GerenteComponent,
    VentaComponent,
    NavbarHomeComponent,
    HeaderComponent,
    LoginComponent,
    VentaPasajeComponent,
    VuelosDisponiblesComponent,
    DatosPasajeroComponent,
    CompraComponent,
    NavbarVentaComponent,
    AsientoComponent,
    RegistroAbordarComponent,
    EquipajeComponent,
    AsignarVueloComponent,
    DevolucionComponent,
    ManifiestoComponent,
    HotelComponent,
    NavbarCheckInComponent,
    AsignarVueloSobreventaComponent,
    PasajerosAbordoComponent,
    PasajesVendidosComponent,
    NavbarAdminGeneralComponent,
    ListaEmpleadosComponent,
    ListaUsuariosSistemaComponent,
    NavbarGerenteComponent,
    NavbarAdminComponent,
    PlanificarVueloComponent,
    RegistrarAvionesComponent,
    AsignarRutaComponent,
    ModificarEstadoAvionesComponent,
    ProveedoresComponent,
    AlquilarAvionComponent,
    RegistroFallasComponent,
    AsignarMantenimientoComponent,
    ModificarPasajeComponent,
    EliminarPasajeroComponent,
    ProgramasVueloComponent,
    GenerarProgramaVueloComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [PasajerosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
