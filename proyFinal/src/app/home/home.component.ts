import { Component } from '@angular/core';
import { NgxQrcodeElementTypes } from '@techiediaries/ngx-qrcode';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  video = 'uP9h-gYtJVQ?start=26';

  ayudas = [{
    nombre: "Max",
    animal: "Perro",
    operacion: "Operacion de estomago",
    estado: "Dado de alta"
  }, {
    nombre: "June",
    animal: "Ave",
    operacion: "Ala rota",
    estado: "En proceso"
  }, {
    nombre: "Momo",
    animal: "Gato",
    operacion: "Operacion de oido",
    estado: "Dado de alta"
  }, {
    nombre: "Lulu",
    animal: "Pez",
    operacion: "Aletas destruidas",
    estado: "En proceso"
  }, {
    nombre: "Javi",
    animal: "Perro",
    operacion: "Cirugia de ojo",
    estado: "Dado de alta"
  }, {
    nombre: "Jann",
    animal: "Hamster",
    operacion: "Problemas de estomago",
    estado: "En proceso"
  }, {
    nombre: "Meddi",
    animal: "Gato",
    operacion: "Patita quebrada",
    estado: "Dado de alta"
  }];

  numero?: number;
  valorFinal = "Conoce algunos de los casos mas severos de nuestros clientes!";

  aleatorio() {
    this.numero = Math.floor(Math.random() * 7);
    console.log(this.numero);
    this.valorFinal = this.ayudas[this.numero].nombre + " ~ " +
      this.ayudas[this.numero].animal + " ~ " +
      this.ayudas[this.numero].operacion + " ~ " +
      this.ayudas[this.numero].estado;
    this.value = this.valorFinal;
  }

  title = 'codigo_qr';
  elementType = NgxQrcodeElementTypes.URL;
  value = this.valorFinal;

  constructor() { }

  ngOnInit(): void {
  }

}
