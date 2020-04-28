import { Injectable } from '@angular/core';
import { DataModel } from '../interfaces/dataModel.interface';

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  constructor() { }
  buildOptions(item: DataModel): Highcharts.Options {
    return {
      title: {
        text: item.title
      },
      subtitle: {
        text: `Sources: <a href="${item.url}">${item.url}</a>`
      },
      series: [{
        data: item.chart,
        type: 'line'
      }]
    }
  }
}
