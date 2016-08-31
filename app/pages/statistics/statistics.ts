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
  @ViewChild( 'myChart') canvas: ElementRef;

  public chart: HighchartsChartObject;

  constructor() {
    
  }

  ngAfterViewInit(){
    this.renderChart();
  }

 ionViewDidEnter(){
   var self = this;
    setTimeout(
      function(){self.chart.reflow();},
      1000
    );
  }

  renderChart(){
    this.chart = Highcharts.chart (this.canvas.nativeElement, {
      chart: {
          zoomType: 'x'
      },
      series: [
        {name: 'Poids', data: [75,75,75,76,77,78,77,77,78,75,75,77,77,76,75,76,77,76,78,75,77,75,78,77,77,78,77,78,76,75]},
        {name: 'Forme', data: [61,62,65,69,61,61,62,54,59,61,61,58,63,57,60,61,54,70,54,55,61,69,65,70,67,55,55,70,60,70]},
        {name: 'Fatigue', data: [33,34,38,35,37,31,32,40,38,38,31,43,37,39,36,37,31,39,43,40,43,31,45,36,43,42,34,34,42,35]}
      ]
    });
  }
}