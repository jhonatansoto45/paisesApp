import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [SidebarComponent],
  exports: [SidebarComponent],
  imports: [
    CommonModule,
    //* Importamos el RouterModule para que funcione el routerLink.
    //! No es necesario importar el archivo de Rutas
    RouterModule,
  ],
})
export class SharedModule {}
