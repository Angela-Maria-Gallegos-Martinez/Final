import { HtmlParser } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ayuda',
  templateUrl: './ayuda.component.html',
  styleUrls: ['./ayuda.component.css']
})
export class AyudaComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    this.categorias();
    this.respuestas();
  }

  categorias() {
    const categorias = document.querySelectorAll<HTMLElement>('#categorias .categoria');
    const contenPreguntas = document.querySelectorAll<HTMLElement>('.container-preguntas');
    let categoriaActiva: any;

    categorias.forEach((catego) => {
      catego.addEventListener('click', (e) => {
        categorias.forEach((elemento) => {
          elemento.classList.remove('activa');
        });

        (e.currentTarget as Element).classList.toggle('activa');
        categoriaActiva = catego.dataset['categoria'];
        console.log(categoriaActiva);

        //Activamos contenedor de preguntas
        contenPreguntas.forEach((contenedor) => {
          if (contenedor.dataset['categoria'] === categoriaActiva) {
            contenedor.classList.add('activo');
          } else {
            contenedor.classList.remove('activo');
          }
        });
      });
    });
  }

  respuestas() {
    const preguntas = document.querySelectorAll<HTMLElement>('.preguntas .container-pregunta');
    preguntas.forEach((pregunta) => {
      pregunta.addEventListener('click', (e) => {
        (e.currentTarget as Element).classList.toggle('activa');

        const respuesta = pregunta.querySelector('.respuesta') as HTMLElement;
        const alturareal = respuesta.scrollHeight;

        console.log(alturareal);
        if (!respuesta.style.maxHeight) {
          respuesta.style.maxHeight = alturareal + 'px';
        } else {
          respuesta.style.maxHeight = "5px";
        }
      });
    });
  }
}
