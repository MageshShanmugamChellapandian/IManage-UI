import React from "react";
import "./MetricsBenchmark.css";
import Graph from "./Graph";

const data = [
  {
    name: "Benchmark fund 1",
    stat: "4,485.56",
    net: "+247.71",
    per: "6.7",
  },
  {
    name: "Benchmark fund 1",
    stat: "4,485.56",
    net: "+247.71",
    per: "6.7",
  },
  {
    name: "Benchmark fund 1",
    stat: "4,485.56",
    net: "+247.71",
    per: "6.7",
  },
];
const MetricsBenchmark = () => {
  return (
    <div className="metrics">
      <div className="comp_wrapper">
        <div className="comp_head">Metrics & Benchmarks</div>

        <div className="metrics_stat">
          {data.map((item, id) => {
            return (
              <div className="metrics_stat_wrapper" key={id}>
                <div className="metrics_stat_data">
                  <div>{item.name}</div>
                  <div>{item.stat}</div>
                  <div>
                    {item.net} (${item.per}%)
                  </div>
                </div>
                <div className="metrics_stat_graph">
                  <Graph />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MetricsBenchmark;
