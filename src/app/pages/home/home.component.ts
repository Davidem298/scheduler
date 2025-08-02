import { Component } from '@angular/core';
import { NgApexchartsModule } from 'ng-apexcharts';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle,
  ApexTheme,
} from 'ng-apexcharts';
import { LineChartComponent } from "../../shared/components/line-chart/line-chart.component";
import { PieChartComponent } from "../../shared/components/pie-chart/pie-chart.component";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  title: ApexTitleSubtitle;
  theme: ApexTheme;
};

@Component({
  selector: 'app-home',
  imports: [NgApexchartsModule, LineChartComponent, PieChartComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  public chartOptions: ChartOptions;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: 'Set completati',
          data: [12, 9, 15, 7, 10]  // Example: number of sets per training
        }
      ],
      chart: {
        type: 'bar',
        height: 350
      },
      title: {
        text: 'Statistiche Allenamento'
      },
      xaxis: {
        categories: ['Lun', 'Mar', 'Mer', 'Gio', 'Ven']  // Training days
      },
      theme: {
        mode: 'dark'  // default
      }
    };
  }
}
