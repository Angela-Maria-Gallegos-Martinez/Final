import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consejos',
  templateUrl: './consejos.component.html',
  styleUrls: ['./consejos.component.css']
})
export class ConsejosComponent implements OnInit {
  selecOpcion: string = '0';
  verSeleccion: string = '';
  vector = [1,2,3,4,5];
  constructor() { }

  ngOnInit(): void {
  }

  captura(){
    this.verSeleccion = this.selecOpcion;
  }
}
