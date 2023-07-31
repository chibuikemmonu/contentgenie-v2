// CHART.JS
// This contains only the javascript for chart rendering

//👇🏽 Chart for => ENGAGEMENTS ACROSS NETWORKS
var engagementOptions = {
  series: [
    {
      name: "Facebook",
      data: [31, 40, 28, 51, 42, 109, 100],
    },
    {
      name: "Instagram",
      data: [11, 32, 45, 32, 34, 52, 41],
    },
    {
      name: "Twitter",
      data: [0, 0, 0, 0, 0, 0, 0],
    },
    {
      name: "LinkedIn",
      data: [0, 0, 0, 0, 0, 0, 0],
    },
    {
      name: "Pinterest",
      data: [0, 0, 0, 0, 0, 0, 0],
    },
  ],
  chart: {
    height: 350,
    type: "area",
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
  },
  xaxis: {
    type: "datetime",
    categories: [
      "2018-09-19T00:00:00.000Z",
      "2018-09-19T01:30:00.000Z",
      "2018-09-19T02:30:00.000Z",
      "2018-09-19T03:30:00.000Z",
      "2018-09-19T04:30:00.000Z",
      "2018-09-19T05:30:00.000Z",
      "2018-09-19T06:30:00.000Z",
    ],
  },
  tooltip: {
    x: {
      format: "dd/MM/yy HH:mm",
    },
  },
};

let engagementChart = new ApexCharts(
  document.querySelector("#chart--engagements"),
  engagementOptions
);
engagementChart.render();

//👇🏽 Chart for => COMPARISON ACROSS NETWORKS
var comparisonOptions = {
  series: [44, 55, 41, 17, 15],
  chart: {
    width: 380,
    type: "donut",
  },
  plotOptions: {
    pie: {
      startAngle: -90,
      endAngle: 270,
    },
  },
  dataLabels: {
    enabled: false,
  },
  fill: {
    type: "gradient",
  },
  legend: {
    formatter: function (val, opts) {
      return val + " - " + opts.w.globals.series[opts.seriesIndex];
    },
  },
  title: {
    text: "Gradient Donut with custom Start-angle",
  },
  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 200,
        },
        legend: {
          position: "bottom",
        },
      },
    },
  ],
};

let comparisonChart = new ApexCharts(
  document.querySelector("#chart--comparison"),
  comparisonOptions
);
comparisonChart.render();
