import { Component, OnInit } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle,
  ApexTheme,
  ApexStroke,
  ApexDataLabels
} from 'ng-apexcharts';
import { NgApexchartsModule } from 'ng-apexcharts';
export type LineChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  title: ApexTitleSubtitle;
  theme: ApexTheme;
  stroke: ApexStroke;
  dataLabels: ApexDataLabels;
};

@Component({
  selector: 'app-line-chart',
  imports: [NgApexchartsModule],
  templateUrl: './line-chart.component.html',
  styleUrl: './line-chart.component.css'
})
export class LineChartComponent implements OnInit {
  chartOptions!: LineChartOptions;

  ngOnInit() {
    this.chartOptions = {
      series: [
        { name: 'Reps', data: [10, 12, 14, 16, 18] }
      ],
      chart: { type: 'line', height: 350 },
      xaxis: {
        categories: ['Lun', 'Mar', 'Mer', 'Gio', 'Ven'],
      },
      title: {
        text: 'Progressi Allenamento',
      },
      theme: { mode: 'dark' },
      stroke: { curve: 'smooth' },
      dataLabels: { enabled: true }
    };
  }
}
