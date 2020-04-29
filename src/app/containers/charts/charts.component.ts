import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ChartService } from '../../services/chart.service';
import { DataModel, ApiResponse } from 'src/app/interfaces/dataModel.interface';
import { of, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit {
  
  chartOptions2: Highcharts.Options = {
    series: [{
      type: 'line'
    }]
  };
  
  charts$: Observable<Highcharts.Options[]>;
  

  constructor(
    private readonly apiService: ApiService, 
    private readonly chartService: ChartService
  ) { }

  ngOnInit(): void {
    this.charts$ = this.apiService.getData().pipe(
      switchMap((res: ApiResponse) => {
        return of (res.data.map((item: DataModel) => this.chartService.buildOptions(item)))
      }))
  }

}
