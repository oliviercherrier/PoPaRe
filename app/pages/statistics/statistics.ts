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

    this.mumyProgressBarOptions = {
        chart: {
            type: 'bar'
        },
        title: {
          text: undefined
        },
        credits: {
          enabled: false
        },
        xAxis: {
          lineWidth: 0,
          minorGridLineWidth: 0,
          lineColor: 'transparent',      
          labels: {
            enabled: false
          },
          minorTickLength: 0,
          tickLength: 0,
          gridLineWidth: 0,
        },   
        yAxis: {
          type: 'datetime',
          tickInterval: 3600 * 1000, //1 hour
          min: 0,
          dateTimeLabelFormats: {
              millisecond: '%H:%M:%S',
              second: '%H:%M:%S',
              minute: '%H:%M:%S',
              hour: '%H:%M:%S',
              day: '%H:%M:%S',
              week: '%H:%M:%S',
              month: '%H:%M:%S',
              year: '%H:%M:%S'
          },
          labels: {
            enabled: false
          },
          gridLineWidth: 0,
          title: {
            text: ''
          }
        },
        legend: {
          reversed: true,
          enabled: false
        },
        plotOptions: {
          series: {
            stacking: 'normal',
          },
          bar: {
            dataLabels: {
               formatter: function(){
                let date = new Date(this.y);
                return "<span style=\"font-size: 80%\">"+date.getUTCHours().toString() + "h" + date.getUTCMinutes().toString() + "</span>";
              },
              enabled: true,
              color: 'white',
              style: {
                textShadow: '0 0 3px black'
              }
            }
          },
        },

        series: [
          { data: [Date.UTC(1970, 0, 1, 3,46)]},
          { data: [Date.UTC(1970, 0, 1, 4,13)]
        }]
    };
  }

 ionViewDidEnter(){
   var self = this;
    setTimeout(
      function(){
        self.mumyWeightChart.reflow(); 
        self.babyWeightchart.reflow();
        self.mumyProgressBar.reflow();
      },
      1000
    );

    

  }

  saveMumyWeightChart(chartInstance) {
      this.mumyWeightChart = chartInstance;
  }

  saveBabyWeightChart(chartInstance) {
      this.babyWeightchart = chartInstance;
  }

  saveMumyProgressBar(chartInstance) {
      this.mumyProgressBar = chartInstance;
  }

  mumyWeightChart : HighchartsChartObject;
  mumyWeightChartOptions: HighchartsOptions;

  babyWeightchart : HighchartsChartObject;
  babyWeightChartOptions: HighchartsOptions;

  mumyProgressBar: HighchartsChartObject;
  mumyProgressBarOptions: HighchartsOptions;
}