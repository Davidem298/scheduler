import { Component, OnInit } from '@angular/core';
import {
  ApexNonAxisChartSeries,
  ApexChart,
  ApexResponsive,
  ApexDataLabels,
  ApexTheme
} from 'ng-apexcharts';
import { NgApexchartsModule } from 'ng-apexcharts';

export type PieChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  labels: string[];
  theme: ApexTheme;
  colors?: string[];
  plotOptions?: ApexPlotOptions;
  legend: ApexLegend;
  dataLabels: ApexDataLabels;
};
@Component({
  selector: 'app-pie-chart',
  imports: [NgApexchartsModule],
  templateUrl: './pie-chart.component.html',
  styleUrl: './pie-chart.component.css'
})
export class PieChartComponent implements OnInit {
  darkTheme: boolean = true;
  chartOptions!: PieChartOptions;

    ngOnInit() {
      this.chartOptions = {
        series: [35, 25, 20, 20],
        chart: {
          type: 'donut',
          width: 400,
          toolbar: {
            show: false
          }
        },
        labels: ['Cardio', 'Pesi', 'HIIT', 'Stretching'],
        colors: this.darkTheme
          ? ['#4FD1C5', '#81E6D9', '#63B3ED', '#A0AEC0']
          : ['#3182CE', '#38B2AC', '#4299E1', '#EDF2F7'],
        dataLabels: {
          enabled: true,
          style: {
            colors: [this.darkTheme ? '#E2E8F0' : '#2D3748']
          }
        },
        plotOptions: {
          pie: {
            donut: {
              size: '20%',  // Wider donut
              labels: {
                show: true,
                total: {
                  show: true,
                  label: 'Totale',
                  fontSize: '16px',
                  color: this.darkTheme ? '#CBD5E0' : '#2D3748'
                }
              }
            }
          }
        },
        legend: {
          position: 'bottom',
          labels: {
            colors: this.darkTheme ? '#E2E8F0' : '#2D3748'
          }
        },
        theme: {
          mode: this.darkTheme ? 'dark' : 'light'
        }
      };
    }
}
