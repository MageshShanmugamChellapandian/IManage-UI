import React from "react";
import "./Overview.css";
import { BiBuilding } from "react-icons/bi";
import { AiOutlineCalendar } from "react-icons/ai";
import { BsCheck2Circle } from "react-icons/bs";

const Overview = () => {
  return (
    <div className="overview">
      <div className="overview_wrapper comp_wrapper">
        <div className="overview_head comp_head">Overview</div>

        <div className="overview_stats_wrapper">
          <div className="overview_stats">
            <div className="overview_stats_icon">
              <BiBuilding />
            </div>
            <div className="overview_stats_data">
              <div>Company codes loaded</div>
              <div>6</div>
            </div>
          </div>
          <div className="overview_stats">
            <div className="overview_stats_icon">
              <AiOutlineCalendar />
            </div>
            <div className="overview_stats_data">
              <div>Last data load</div>
              <div>12 May 2023</div>
            </div>
          </div>
          <div className="overview_stats">
            <div className="overview_stats_icon">
              <BsCheck2Circle />
            </div>
            <div className="overview_stats_data">
              <div>Data integrity</div>
              <div>ok</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
