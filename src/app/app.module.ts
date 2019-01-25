import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
