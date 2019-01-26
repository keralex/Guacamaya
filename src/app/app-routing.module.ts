import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './navigation/home/home.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  // home
{
  path:'',
  children:[
  {path:'',redirectTo:'/home',pathMatch:'full'},
   {path:'home',component:LoginComponent}
   ],  component:HomeComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
