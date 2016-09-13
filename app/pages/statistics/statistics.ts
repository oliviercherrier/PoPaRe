import {Component, ViewChild, ElementRef} from '@angular/core';

import { CHART_DIRECTIVES } from 'angular2-highcharts';
/*
  Generated class for the StatisticsPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/

@Component({
  selector: 'statistics-page',
  directives: [CHART_DIRECTIVES],
  templateUrl: 'build/pages/statistics/statistics.html',
})

export class StatisticsPage {

  constructor() {
    this.mumyWeightChartOptions = {
      title: {
          text: undefined
      },
      chart: {
          zoomType: 'x'
      },
      credits: {
        enabled: false
      },
      legend: {
        enabled: false
      },
      xAxis: {
        lineWidth: 0,
        minorGridLineWidth: 0,
        lineColor: 'transparent',      
        minorTickLength: 0,
        tickLength: 0,
        gridLineWidth: 0,
      },
      yAxis: {
        max: 78, 
        min: 75,
        title: {
            text: ''
        }
      },
      series: [
        {name: 'Poids', data: [77,78,76,75]}
      ]
    };

    this.babyWeightChartOptions = {
      title: {
          text: undefined
      },
      chart: {
          zoomType: 'x'
      },
      credits: {
        enabled: false
      },
      legend: {
        enabled: false
      },
      xAxis: {
        lineWidth: 0,
        minorGridLineWidth: 0,
        lineColor: 'transparent',      
        minorTickLength: 0,
        tickLength: 0,
        gridLineWidth: 0,
      },
      yAxis: {
        max: 10, 
        min: 8,
        title: {
            text: ''
        }
      },
      series: [
        {name: 'Poids', data: [8,9,10,10]}
      ]
    };
  }

 ionViewDidEnter(){
   var self = this;
    setTimeout(
      function(){
        self.mumyWeightChart.reflow(); 
        self.babyWeightchart.reflow()
      },
      1000
    );

    

  }

  saveMumyWeightInstance(chartInstance) {
      this.mumyWeightChart = chartInstance;
  }

  saveBabyWeightInstance(chartInstance) {
      this.babyWeightchart = chartInstance;
  }

  mumyWeightChart : HighchartsChartObject;
  mumyWeightChartOptions: HighchartsOptions;

  babyWeightchart : HighchartsChartObject;
  babyWeightChartOptions: HighchartsOptions;

}