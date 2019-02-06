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
import { VentaPasajeComponent } from './components/ventas/venta-pasaje/venta-pasaje.component';
import { VuelosDisponiblesComponent } from './components/ventas/vuelos-disponibles/vuelos-disponibles.component';
import { DatosPasajeroComponent } from './components/ventas/datos-pasajero/datos-pasajero.component';
import { CompraComponent } from './components/ventas/compra/compra.component';
import { NavbarVentaComponent } from './navbars/navbar-venta/navbar-venta.component';
import { AsientoComponent } from './components/check_in/asiento/asiento.component';
import { EquipajeComponent } from './components/check_in/equipaje/equipaje.component';
import { AsignarVueloComponent } from './components/check_in/asignar-vuelo/asignar-vuelo.component';
import { DevolucionComponent } from './components/check_in/devolucion/devolucion.component';
import { ManifiestoComponent } from './components/check_in/manifiesto/manifiesto.component';
import { HotelComponent } from './components/check_in/hotel/hotel.component';
import { NavbarCheckInComponent } from './navbars/navbar-check-in/navbar-check-in.component';
import { AsignarVueloSobreventaComponent } from './components/check_in/asignar-vuelo-sobreventa/asignar-vuelo-sobreventa.component';
import { PasajerosAbordoComponent } from './components/check_in/pasajeros-abordo/pasajeros-abordo.component';
import { PasajesVendidosComponent } from './components/ventas/pasajes-vendidos/pasajes-vendidos.component';
import { PasajerosService } from './services/pasajeros.service';
import { NavbarAdminGeneralComponent } from './navbars/navbar-admin-general/navbar-admin-general.component';
import { ListaEmpleadosComponent } from './components/EmpleadosComponent/lista-empleados/lista-empleados.component';
import { ListaUsuariosSistemaComponent } from './components/UsuariosComponent/lista-usuarios-sistema/lista-usuarios-sistema.component';
import { NavbarGerenteComponent } from './navbars/navbar-gerente/navbar-gerente.component';
import { NavbarAdminComponent } from './navbars/navbar-admin/navbar-admin.component';
import { PlanificarVueloComponent } from './components/vuelosComponent/planificar-vuelo/planificar-vuelo.component';
import { RegistrarAvionesComponent } from './components/AvionesComponent/registrar-aviones/registrar-aviones.component';
import { ModificarEstadoAvionesComponent } from './components/AvionesComponent/modificar-estado-aviones/modificar-estado-aviones.component';
import { ProveedoresComponent } from './components/vuelosCharterComponent/proveedores/proveedores.component';
import { AlquilarAvionComponent } from './components/vuelosCharterComponent/alquilar-avion/alquilar-avion.component';
import { RegistroFallasComponent } from './components/MantenimientoComponent/registro-fallas/registro-fallas.component';
import { AsignarMantenimientoComponent } from './components/MantenimientoComponent/asignar-mantenimiento/asignar-mantenimiento.component';
import { ModificarPasajeComponent } from './components/PasajerosComponent/modificar-pasaje/modificar-pasaje.component';
import { EliminarPasajeroComponent } from './components/PasajerosComponent/eliminar-pasajero/eliminar-pasajero.component';
import { ProgramasVueloComponent } from './components/vuelosComponent/programas-vuelo/programas-vuelo.component';
import { GenerarProgramaVueloComponent } from './components/vuelosComponent/generar-programa-vuelo/generar-programa-vuelo.component';
import { EliminarProgramaVueloComponent } from './components/vuelosComponent/eliminar-programa-vuelo/eliminar-programa-vuelo.component';
import { ModificarProgramaVueloComponent } from './components/vuelosComponent/modificar-programa-vuelo/modificar-programa-vuelo.component';
import { RegistrarPasajeroComponent } from './components/check_in/registrar-pasajero/registrar-pasajero.component';

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
    ModificarEstadoAvionesComponent,
    ProveedoresComponent,
    AlquilarAvionComponent,
    RegistroFallasComponent,
    AsignarMantenimientoComponent,
    ModificarPasajeComponent,
    EliminarPasajeroComponent,
    ProgramasVueloComponent,
    GenerarProgramaVueloComponent,
    EliminarProgramaVueloComponent,
    ModificarProgramaVueloComponent,
    RegistrarPasajeroComponent,
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
