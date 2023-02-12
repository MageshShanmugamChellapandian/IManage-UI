import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Pie,
  PieChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

type IGraphModel = {
  graphType: string;
  data: any[];
};

class GraphCard extends Component<IGraphModel> {
  constructor(props: any) {
    super(props);
  }

  render(): React.ReactNode {
    {
      return (
        <div className="container graphCardTemplate">
          <div className="row">
          <div className="col-sm">
              <PieChart width={400} height={400}>
                <Pie
                  dataKey="users"
                  isAnimationActive={false}
                  data={this.props.data}
                  cx={150}
                  cy={150}
                  outerRadius={80}
                  fill="#8884d8"
                  label
                />
                <Tooltip />
              </PieChart>
              </div>
            
              <div className="col-sm graphCard">
                <BarChart
                  width={500}
                  height={300}
                  data={this.props.data}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 80,
                    bottom: 5,
                  }}
                  barSize={20}
                >
                  <XAxis
                    dataKey="name"
                    scale="point"
                    padding={{ left: 10, right: 10 }}
                  />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <CartesianGrid strokeDasharray="3 3" />
                  <Bar
                    dataKey="users"
                    fill="#8884d8"
                    background={{ fill: "#eee" }}
                  />
                </BarChart>
              </div>
              </div>
        </div>
      );
    }
  }
}

export default GraphCard;
