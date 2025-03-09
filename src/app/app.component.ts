import { Component, computed, inject, signal } from '@angular/core';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'FlavouryStock';

  private router = inject(Router); // Nueva forma de inyectar Router en Angular 19
  currentHeader = signal('inicio'); // Usa signals en lugar de variables reactivas tradicionales

  constructor() {
    // Computed se actualiza automáticamente cuando cambia la URL
    computed(() => {
      const url = this.router.url;
      if (url.includes('/header-admin')) {
        this.currentHeader.set('header-admin');
      } else if (url.includes('/header-usuario')) {
        this.currentHeader.set('header-usuario');
      } else {
        this.currentHeader.set('inicio');
      }
    });
  }

  /* nombre: string = '';
  primerApellido: string = '';
  segundoApellido: string = '';
  empresa: string = '';
  email: string = '';
  contraseña: string = '';
  aceptarCondiciones: boolean = false;

  crearCuenta() {
    console.log('Cuenta creada:', {
      nombre: this.nombre,
      primerApellido: this.primerApellido,
      segundoApellido: this.segundoApellido,
      empresa: this.empresa,
      email: this.email,
      contraseña: this.contraseña, //esto tiene que ir encriptado
      aceptarCondiciones: this.aceptarCondiciones,
    });
  } */
}
