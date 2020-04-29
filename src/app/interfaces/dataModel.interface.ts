export interface chartData {
  x: number,
  y: number
}

export interface DataModel {
  title: string,
  subTitle: string,
  date: string,
  url: string,
  description: string,
  chart: chartData[],
  chartOptions?: Highcharts.Options,
}

export interface ApiResponse {
  data: DataModel[]
}