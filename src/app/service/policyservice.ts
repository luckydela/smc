import { Injectable } from '@angular/core';
import {Chart} from 'chart.js'

@Injectable()
export class PolicyService {


  constructor(){}
  getPolicyChart(labels, amounts,canvasid){
    return new Chart(canvasid, {
      type: 'line',
      data: {
        labels: labels, // your labels array
        datasets: [
          {
            data: amounts, // your data array
            borderColor: [
                'rgba(54, 162, 235, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(94, 107, 46, 1)',
                'rgba(107, 46, 58, 1)',
                'rgba(107, 46, 58, 1)',
                'rgba(208, 103, 152, 1)'
  
            ],
            backgroundColor: [
              'rgba(208, 103, 152, 1)',
              'rgba(255, 206, 86, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(107, 46, 58, 1)',
                'rgba(94, 107, 46, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
              'rgba(94, 107, 46, 1)',
              'rgba(107, 46, 58, 1)'

          ],
            fill: true
          },
          {
            data: canvasid, // your data array
            borderColor: '#00AEFF',
            fill: false
          },
        ]
      },
      options: {
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true
          }],
        }
      }
    });
}

}





