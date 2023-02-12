import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import HighchartsExporting from "highcharts/modules/exporting";
import HighchartsAccessibility from "highcharts/modules/accessibility";
import HighchartsSankey from "highcharts/modules/sankey";
import data from "./data.json";
HighchartsExporting(Highcharts);
HighchartsAccessibility(Highcharts);
HighchartsSankey(Highcharts);

const getOptions = (type: any) => ({
  chart: {
    zoomType: "x",
    height: 100,
  },
  title: {
    text: "",
  },
  subtitle: {
    text: "",
  },
  xAxis: {
    type: "",
  },
  yAxis: {
    title: {
      text: "",
    },
  },
  legend: {
    enabled: false,
  },
  colors: [
    "#2f7ed8",
    "#0d233a",
    "#8bbc21",
    "#910000",
    "#1aadce",
    "#492970",
    "#f28f43",
    "#77a1e5",
    "#c42525",
    "#a6c96a",
  ],
  plotOptions: {
    area: {
      fillColor: {
        linearGradient: {
          x1: 0,
          y1: 0,
          x2: 0,
          y2: 1,
        },
        stops: [
          [0, "#2f7ed8"],
          [1, "#c4252550"],
        ],
      },
      marker: {
        radius: 2,
      },
      lineWidth: 1,
      states: {
        hover: {
          lineWidth: 1,
        },
      },
      threshold: null,
    },
  },

  series: [
    {
      type: "area",
      name: "",
      data: data,
    },
  ],
});

const Graph = () => {
  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={getOptions("sankey")} />{" "}
    </div>
  );
};

export default Graph;
