import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ChartService } from '../../services/chart.service';
import { DataModel, ApiResponse } from 'src/app/interfaces/dataModel.interface';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit, OnDestroy {
  
  chartOptions2: Highcharts.Options = {
    series: [{
      type: 'line'
    }]
  };
  isLoading: boolean;
  chartsArray: Highcharts.Options[] = [];
  subscription: Subscription;
  

  constructor(private readonly apiService: ApiService, private readonly chartService: ChartService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.subscription = this.apiService.getData().subscribe(
      (res: ApiResponse) => {
        this.chartsArray = res.data.map((item: DataModel) => this.chartService.buildOptions(item));
        this.isLoading = false;
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
