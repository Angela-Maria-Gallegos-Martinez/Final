import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-evaluacion',
  templateUrl: './evaluacion.component.html',
  styleUrls: ['./evaluacion.component.css']
})
export class EvaluacionComponent implements OnInit {

  vec1: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.grafica();
  }

  generadorgrafica() {
    this.vec1 = this.aleatorios();
    this.grafica();
  }

  aleatorios(): any[] {
    var num = [];

    for (let i = 0; i <= 5; i++) {
      num[i] = Math.floor(Math.random() * (20 - 1 + 1) + 1);
    }

    return num;
  }

  grafica() {
    var chartGrafica = new Chart('ChartGrafica', {
      type: 'line',
      data: {
        labels: ['Perros', 'Gatos', 'Hamsters', 'Aves', 'Peces'],
        datasets: [{
          label: 'Datos Vec1',
          data: this.vec1,
          backgroundColor: [
            'rgba(54, 162, 235, 0.2)'
          ],
          borderColor: [
            'rgba(54, 162, 235, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }

}
