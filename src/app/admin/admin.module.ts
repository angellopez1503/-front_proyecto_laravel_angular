import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { CategoriaComponent } from './components/categoria/categoria.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { CoreModule } from '../core/core.module';


@NgModule({
  declarations: [
    CategoriaComponent,
    PerfilComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    CoreModule
  ]
})
export class AdminModule { }
