import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  nombre: string = '';
  email: string = '';
  mensaje: string = '';
  seguridad: string = '';

  dato: any;

  enviar() {
    if (this.nombre != '' && this.email != '' && this.mensaje != '' && this.seguridad == '5') {

      this.dato = {
        "nombre": this.nombre,
        "email": this.email,
        "mensaje": this.mensaje
      }
    } else {
      alert('Los campos no son correctos.');
    }

  }
}
