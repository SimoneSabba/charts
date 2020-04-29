# ChartsPage

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.3.

## Get started

Run `npm install` to install dependencies

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Chart Library
For chart has been used [Highchart](https://www.highcharts.com/), in particular its Angular wrapper [Highcharts-Angular](https://github.com/highcharts/highcharts-angular).

## Architecture

Due the time limitation, I've developed a single page containing all charts. I've decided to split the pages into `components` ( dummy UI components ) and `containers` ( smart component that handle the data).

`Modules`:
- MaterialModule: export Angular Material modules used in the application

`Components`:
- Header
- Footer
- Chart: wrapper for highchart component

`Containers`
- Charts: where JSON file is read and chart option data is build

I've created 2 services that handle the HTTP call and transform data for chart object

- `ApiService`: handle the HTTP call to read the JSON file
- `ChartService`: transform data to build chart configuration options

## Responsive
The responsive is managed using `css grid` features

## Improvements and future development
Due the time restriction, I kept the page and the structure very simple and minimal.
For future improvements, I'd do the following

- Structure application using angular modules
- Improve chart readability adding more properties like description or anything that could add meaning to it
- Add a chart detail page, where user can display 1 single chart with more detailed description
- Add a select to allow user to choice which type of chart he wants to display (for example `area` rather than `line`)
- Add some unit test
- Fix style in header and footer