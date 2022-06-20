import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  verTipo: any;

  constructor() {
    this.verTipo = localStorage.getItem('tipo');
  }

  ngOnInit(): void {
  }

  salirUser(){
    localStorage.clear();
    location.replace("./home");
  }
}
