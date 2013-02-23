# AngularChart

AngularChart is an angularjs directive that simplifies the creation of a chart. 
It lets you to create a chart in a declarative way with the minimum effort using specific html tags and attributes.

## Usage 

### Example
For a line chart, put in your html file:

`
<chart title="Line chart example" xData="lineChartXData" yData="lineChartYData" xName="Month" yName="Hit" ></chart>
`

where xData and yData attributes specify the name of the variables that point to the chart data. This variables must be created in corresponding angularjs scope (in the example *lineChartXData* and *lineChartYData* are variables declared in corresponding angularjs scope).

This tag produces the following chart:
![Example image](https://github.com/bitliner/AngularChart/raw/master/examples/img/screenshot.png "Example image")

### Format of chart data

It depends on type of the chart.
If the chart is a line chart, the data is an object with 2 properties:
* **xData**: data of x axis, it is an array of values
* **yData**: data of y axis, it is an array of objects, where every has 2 parameters
  * **name**: specify the name of the line 
  * **data**: an array of values. The lenght of the array is the same length of xData, and the value in each position of the array coresponds to the x value at same position in the xData array

See the example, and `examples/data/line-chart.json` file to see the format of data of a line chart.

### Type of charts

Now it supports only a line chart, and it uses HighCharts library to build the charts. More types and more libraries will be supported in the next future.

## Documentation

The following attributes of `chart` tag are now supported:
* title: the title of the chart
* subtitle: a subtitle that compares just below the title
* xData: the name of scope variable the holds the data of x axis
* yData: the name of scope variable the holds the data of y axis
* xName: the name of x axis
* yName: the name of y axis
* yInterval: the interval of markers of y axis (if not specified the library calculates it automatically)
* yMin: the minimum value of y axis (if not specified the library calculates it automatically)
* yMax the minimum value of y axis (if not specified the library calculates it automatically)
* formatter: the name fo variable in the scope that points to function/value that will be displayed when the mouse is over a point of a line

All attributes are optional, except xData and yData

## TODO

* support for more libraries to build the charts
* support for more types of charts 


