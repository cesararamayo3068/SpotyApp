import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',//TODO: localhost:4200/
    // la ruta raiz va a cargar el home module aplicando lazy-loading
    loadChildren:()=> import(`./modules/home/home.module`).then(m=>m.HomeModule)
    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
