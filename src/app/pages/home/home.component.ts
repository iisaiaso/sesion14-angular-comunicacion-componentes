import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  nombre!: string
  dni!: number
  estado!: string
  titleResultado!: string
  dato!: object
  mostrar() {
    this.dato = {
      "nombre": this.nombre, "dni": this.dni, "estado": this.estado,
    }
    this.titleResultado = 'Registro Exitoso : '
  }

}
