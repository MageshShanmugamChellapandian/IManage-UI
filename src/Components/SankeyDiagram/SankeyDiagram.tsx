import '../SankeyDiagram/SankeyDiagram.css';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import HighchartsExporting from 'highcharts/modules/exporting';
import HighchartsAccessibility from 'highcharts/modules/accessibility';
import HighchartsSankey from 'highcharts/modules/sankey';
HighchartsExporting(Highcharts);
HighchartsAccessibility(Highcharts);
HighchartsSankey(Highcharts);


const getOptions = (type:any) => ({
  chart: {
    type,
    // width: 1000,
    height: 600,
  },
  title: {
    text: "Sankey Chart",
  },
  series: [
    {
      keys: ['from', 'to', 'weight'],
      dataLabels: {
        // format: '{point.fromNode.name} → {point.toNode.name}: {point.weight}',
        nodeFormat: '{point.name}',
        color: 'black',
      },
      data: [
        ['Providing Services','Revenue',8],
           ['Renting out Premises','Revenue',8],
           ['Sales of Products','Revenue',16],
           ['Revenue','Proceeds',35],
           ['Loans','Proceeds',5],
           ['Proceeds','Expenses',25],
           ['Expenses','Managerial',5],
           ['Expenses','Commercial',5],
           ['Expenses','Production',25],
           ['Managerial','Personnel Training',1],
           ['Managerial','Office rental',3],
           ['Commercial','Travel allowance',2],
           ['Commercial','Advertising',2],
           ['Commercial','Wages',2],
           ['Production','Wages',10],
           ['Production','Purchases of raw materials',25],
           ['Production','Payment of loans',5],
            ],
    },
  ],
  credits: {
    enabled: false,
  },
});

function SankeyDiagram() {
  return (
    <div className="sankey">
    <div className="comp_head">Income Statement breakdown</div>
    <div className="sankeydiagram">
      <div>
        <HighchartsReact
          highcharts={Highcharts}
          options={getOptions("sankey")}
        />
      </div>
    </div>
  </div>
  );
}

export default SankeyDiagram;

// import React, { useEffect, useState } from "react";
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

// ///
// //Import necessary Highcharts dependencies
// ///
// import Highcharts from 'highcharts'
// import HighchartsReact from 'highcharts-react-official'
// import HighchartsMore from 'highcharts/highcharts-more';
// import HC_exporting from 'highcharts/modules/exporting'

// HighchartsMore(Highcharts);
// HC_exporting(Highcharts);

// function SankeyDiagram() {
    
//     ///
//     ///Create and set up two state variables. Options holds the options for the Highcharts
//     ///component and isLoading keeps that state of the fetch request
//     const [options, setOptions] = useState<any>(null);
//     const [isLoading, setIsLoading] = useState<boolean>(true);
//     const url = "https://data.rcc-acis.org/StnData";

//     useEffect(() => {
//         setIsLoading(true);
        
//         ///
//         /// Create a variable for the fetchRecords method so that we can use async/await
//         /// The query parts are specific to the RCC endpoint
//         const fetchRecords = async () => {
//             const query = {
//                 elems: [
//                     {
//                         interval: "mly",
//                         duration: 1,
//                         name: "avgt",
//                         reduce: { "reduce": "mean" },
//                         prec: 3
//                     }],
//                 sid: "MSPthr 9",
//                 sDate: "2021-01-01",
//                 eDate: "2021-12-31",
//                 meta: ["name", "state", "sids"]
//             }

//             const response = await fetch(url, {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 redirect: 'follow',
//                 body: JSON.stringify(query)
//             });

//             const responseData = await response.json();
//             console.log(responseData)

//             ///
//             /// After the retch request returns go through the each item in the array to assign
//             /// categories and create an array to be used as the series data source
//             ///
//             const categories: any = [];
//             const seriesData: any = [];
//             responseData.data.map((item: any) => {
//                 categories.push(item[0]);
//                 seriesData.push(parseInt(item[1]));
//             });

//             ///
//             /// Setting the Highcharts options variable with the options object right from Highcharts
//             /// Here we set things like the title and other plot options.
//             /// Notice that the Series and Categories are also set here
//             ///
//             setOptions({
//                 title: {
//                     text: `2021 Average temperatures in Minneapolis`
//                 },
//                 xAxis: {
//                     categories: categories
//                 },
//                 yAxis: {
//                     title: {
//                         text: "Temperature (°F)"
//                     }
//                 },
//                 tooltip: {
//                     crosshairs: true,
//                     shared: true,
//                     valueSuffix: '°F'
//                 },
//                 plotOptions: {
//                     line: {
//                         dataLabels: {
//                             enabled: true
//                         },
//                     }
//                 },
//                 series: [
//                     {
//                         name: 'Average Temperature',
//                         color: "#7393B3",
//                         data: seriesData,
//                         zIndex: 1,

//                     }
//                 ]
//             });

//             setIsLoading(false);
//         }

//         fetchRecords();

//     }, []);

//     return (
//         <Row>
//             <Col xs={6}>
//                 <div>
//                     <h1>React Highcharts example</h1>
//                     <Row>
//                         <Col s={6}>
//                             {isLoading &&
//                                 <div>Loading data...</div>
//                             }
//                             {!isLoading && options &&
//                                 <HighchartsReact
//                                     highcharts={Highcharts}
//                                     options={options}
//                                 />
//                             }
//                         </Col>
//                     </Row>
//                 </div>
//             </Col>
//         </Row>
//     );
// }

// export default SankeyDiagram;

// // import React, { Component } from "react";
// // import "../SankeyDiagram/SankeyDiagram.css";
// // import HighCharts from "highcharts";
// // import highchartsMore from 'highcharts/highcharts-more';


// // class SankeyDiagram extends Component {
// //   constructor(props: any) {
// //     super(props);
// //   }

// //   componentDidMount(): void {
// //     debugger;
// //     this.constructChart();
// //   }

// //   constructChart()
// //   {
// //      let highc = HighCharts.chart("container", {
// //         title: {
// //           text: "Highcharts Sankey Diagram",
// //         },
// //         accessibility: {
// //           point: {
// //             valueDescriptionFormat:
// //               "{index}. {point.from} to {point.to}, {point.weight}.",
// //           },
// //         },
// //         series: [
// //           {
// //             keys: ["from", "to", "weight"],
// //             data: [
// //               ["Brazil", "Portugal", 5],
// //               ["Brazil", "France", 1],
// //               ["Brazil", "Spain", 1],
// //               ["Brazil", "England", 1],
// //               ["Canada", "Portugal", 1],
// //               ["Canada", "France", 5],
// //               ["Canada", "England", 1],
// //               ["Mexico", "Portugal", 1],
// //               ["Mexico", "France", 1],
// //               ["Mexico", "Spain", 5],
// //               ["Mexico", "England", 1],
// //               ["USA", "Portugal", 1],
// //               ["USA", "France", 1],
// //               ["USA", "Spain", 1],
// //               ["USA", "England", 5],
// //               ["Portugal", "Angola", 2],
// //               ["Portugal", "Senegal", 1],
// //               ["Portugal", "Morocco", 1],
// //               ["Portugal", "South Africa", 3],
// //               ["France", "Angola", 1],
// //               ["France", "Senegal", 3],
// //               ["France", "Mali", 3],
// //               ["France", "Morocco", 3],
// //               ["France", "South Africa", 1],
// //               ["Spain", "Senegal", 1],
// //               ["Spain", "Morocco", 3],
// //               ["Spain", "South Africa", 1],
// //               ["England", "Angola", 1],
// //               ["England", "Senegal", 1],
// //               ["England", "Morocco", 2],
// //               ["England", "South Africa", 7],
// //               ["South Africa", "China", 5],
// //               ["South Africa", "India", 1],
// //               ["South Africa", "Japan", 3],
// //               ["Angola", "China", 5],
// //               ["Angola", "India", 1],
// //               ["Angola", "Japan", 3],
// //               ["Senegal", "China", 5],
// //               ["Senegal", "India", 1],
// //               ["Senegal", "Japan", 3],
// //               ["Mali", "China", 5],
// //               ["Mali", "India", 1],
// //               ["Mali", "Japan", 3],
// //               ["Morocco", "China", 5],
// //               ["Morocco", "India", 1],
// //               ["Morocco", "Japan", 3],
// //             ],
// //             type: "sankey",
// //             name: "Sankey demo series",
// //           },
// //         ],
// //       });
// //   }

// //   render() {
// //     debugger;
// //     return (
        
// //       <figure className="highcharts-figure">
// //         <div id="container"></div>
// //         <p className="highcharts-description">
// //           Sankey charts are used to visualize data flow and volume between
// //           nodes. The wider lines indicate larger volumes.
// //         </p>
// //       </figure>
// //     );
// //   }
// // }

// // export default SankeyDiagram;

// // const SankeyDiagram = () => {
// //     useEffect(() => {
// //         HighCharts.chart("sankey-container", {
// //             title: {
// //               text: "Highcharts Sankey Diagram",
// //             },
// //             accessibility: {
// //               point: {
// //                 valueDescriptionFormat:
// //                   "{index}. {point.from} to {point.to}, {point.weight}.",
// //               },
// //             },
// //             series: [
// //               {
// //                 keys: ["from", "to", "weight"],
// //                 data: [
// //                   ["Brazil", "Portugal", 5],
// //                   ["Brazil", "France", 1],
// //                   ["Brazil", "Spain", 1],
// //                   ["Brazil", "England", 1],
// //                   ["Canada", "Portugal", 1],
// //                   ["Canada", "France", 5],
// //                   ["Canada", "England", 1],
// //                   ["Mexico", "Portugal", 1],
// //                   ["Mexico", "France", 1],
// //                   ["Mexico", "Spain", 5],
// //                   ["Mexico", "England", 1],
// //                   ["USA", "Portugal", 1],
// //                   ["USA", "France", 1],
// //                   ["USA", "Spain", 1],
// //                   ["USA", "England", 5],
// //                   ["Portugal", "Angola", 2],
// //                   ["Portugal", "Senegal", 1],
// //                   ["Portugal", "Morocco", 1],
// //                   ["Portugal", "South Africa", 3],
// //                   ["France", "Angola", 1],
// //                   ["France", "Senegal", 3],
// //                   ["France", "Mali", 3],
// //                   ["France", "Morocco", 3],
// //                   ["France", "South Africa", 1],
// //                   ["Spain", "Senegal", 1],
// //                   ["Spain", "Morocco", 3],
// //                   ["Spain", "South Africa", 1],
// //                   ["England", "Angola", 1],
// //                   ["England", "Senegal", 1],
// //                   ["England", "Morocco", 2],
// //                   ["England", "South Africa", 7],
// //                   ["South Africa", "China", 5],
// //                   ["South Africa", "India", 1],
// //                   ["South Africa", "Japan", 3],
// //                   ["Angola", "China", 5],
// //                   ["Angola", "India", 1],
// //                   ["Angola", "Japan", 3],
// //                   ["Senegal", "China", 5],
// //                   ["Senegal", "India", 1],
// //                   ["Senegal", "Japan", 3],
// //                   ["Mali", "China", 5],
// //                   ["Mali", "India", 1],
// //                   ["Mali", "Japan", 3],
// //                   ["Morocco", "China", 5],
// //                   ["Morocco", "India", 1],
// //                   ["Morocco", "Japan", 3],
// //                 ],
// //                 type: "sankey",
// //                 name: "Sankey demo series",
// //               },
// //             ],
// //           });
// //     }, []);

// //     return (
// //         <div>
// //             <HighchartsReact
// //                 highcharts={HighCharts}
// //                 options={{}}
// //                 id="sankey-container"
// //             />
// //         </div>
// //     );
// // };
// import React, { Component } from 'react';
// import { render } from 'react-dom';
// import HighchartsReact from 'highcharts-react-official';
// import Highcharts from 'highcharts';

// type ILineChartState = {
//     chartOptions:any,
//     hoverData:any
// }

// class LineChart extends Component<any,ILineChartState> {
//   constructor(props:any) {
//     super(props);

//     this.state = {
//       // To avoid unnecessary update keep all options in the state.
//       chartOptions: {
//         title: {
//           text: "Highcharts Sankey Diagram",
//         },
//         accessibility: {
//           point: {
//             valueDescriptionFormat:
//               "{index}. {point.from} to {point.to}, {point.weight}.",
//           },
//         },
//         series: [
//           {
//             keys: ["from", "to", "weight"],
//             data: [
//               ["Brazil", "Portugal", 5],
//               ["Brazil", "France", 1],
//               ["Brazil", "Spain", 1],
//               ["Brazil", "England", 1],
//               ["Canada", "Portugal", 1],
//               ["Canada", "France", 5],
//               ["Canada", "England", 1],
//               ["Mexico", "Portugal", 1],
//               ["Mexico", "France", 1],
//               ["Mexico", "Spain", 5],
//               ["Mexico", "England", 1],
//               ["USA", "Portugal", 1],
//               ["USA", "France", 1],
//               ["USA", "Spain", 1],
//               ["USA", "England", 5],
//               ["Portugal", "Angola", 2],
//               ["Portugal", "Senegal", 1],
//               ["Portugal", "Morocco", 1],
//               ["Portugal", "South Africa", 3],
//               ["France", "Angola", 1],
//               ["France", "Senegal", 3],
//               ["France", "Mali", 3],
//               ["France", "Morocco", 3],
//               ["France", "South Africa", 1],
//               ["Spain", "Senegal", 1],
//               ["Spain", "Morocco", 3],
//               ["Spain", "South Africa", 1],
//               ["England", "Angola", 1],
//               ["England", "Senegal", 1],
//               ["England", "Morocco", 2],
//               ["England", "South Africa", 7],
//               ["South Africa", "China", 5],
//               ["South Africa", "India", 1],
//               ["South Africa", "Japan", 3],
//               ["Angola", "China", 5],
//               ["Angola", "India", 1],
//               ["Angola", "Japan", 3],
//               ["Senegal", "China", 5],
//               ["Senegal", "India", 1],
//               ["Senegal", "Japan", 3],
//               ["Mali", "China", 5],
//               ["Mali", "India", 1],
//               ["Mali", "Japan", 3],
//               ["Morocco", "China", 5],
//               ["Morocco", "India", 1],
//               ["Morocco", "Japan", 3],
//             ],
//             type: "sankey",
//             name: "Sankey demo series",
//           },
//         ],
//       },
//       hoverData: null
//     };
//   }

//   setHoverData = (e:any) => {
//     // The chart is not updated because `chartOptions` has not changed.
//     this.setState({ hoverData: e.target.category })
//   }

//   updateSeries = () => {
//     // The chart is updated only with new options.
//     this.setState({
//       chartOptions: {
//         title: {
//           text: "Highcharts Sankey Diagram",
//         },
//         accessibility: {
//           point: {
//             valueDescriptionFormat:
//               "{index}. {point.from} to {point.to}, {point.weight}.",
//           },
//         },
//         series: [
//           {
//             keys: ["from", "to", "weight"],
//             data: [
//               ["Brazil", "Portugal", 5],
//               ["Brazil", "France", 1],
//               ["Brazil", "Spain", 1],
//               ["Brazil", "England", 1],
//               ["Canada", "Portugal", 1],
//               ["Canada", "France", 5],
//               ["Canada", "England", 1],
//               ["Mexico", "Portugal", 1],
//               ["Mexico", "France", 1],
//               ["Mexico", "Spain", 5],
//               ["Mexico", "England", 1],
//               ["USA", "Portugal", 1],
//               ["USA", "France", 1],
//               ["USA", "Spain", 1],
//               ["USA", "England", 5],
//               ["Portugal", "Angola", 2],
//               ["Portugal", "Senegal", 1],
//               ["Portugal", "Morocco", 1],
//               ["Portugal", "South Africa", 3],
//               ["France", "Angola", 1],
//               ["France", "Senegal", 3],
//               ["France", "Mali", 3],
//               ["France", "Morocco", 3],
//               ["France", "South Africa", 1],
//               ["Spain", "Senegal", 1],
//               ["Spain", "Morocco", 3],
//               ["Spain", "South Africa", 1],
//               ["England", "Angola", 1],
//               ["England", "Senegal", 1],
//               ["England", "Morocco", 2],
//               ["England", "South Africa", 7],
//               ["South Africa", "China", 5],
//               ["South Africa", "India", 1],
//               ["South Africa", "Japan", 3],
//               ["Angola", "China", 5],
//               ["Angola", "India", 1],
//               ["Angola", "Japan", 3],
//               ["Senegal", "China", 5],
//               ["Senegal", "India", 1],
//               ["Senegal", "Japan", 3],
//               ["Mali", "China", 5],
//               ["Mali", "India", 1],
//               ["Mali", "Japan", 3],
//               ["Morocco", "China", 5],
//               ["Morocco", "India", 1],
//               ["Morocco", "Japan", 3],
//             ],
//             type: "sankey",
//             name: "Sankey demo series",
//           },
//         ],
//       }
//     });
//   }


//   const hc = Highcharts.Chart("",this.state.chartOptions)

//   render() {

//     return (
//       <div>
//         <HighchartsReact
//           highcharts={}
//           options={this.state.chartOptions}
//         />
//       <h3>Hovering over {this.state.hoverData}</h3>
//       <button onClick={this.updateSeries.bind(this)}>Update Series</button>
//       </div>
//     )
//   }
// }
  

// export default LineChart;
