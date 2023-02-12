import axios from "axios";
import React, { Component } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { ILoggedInUser, IUser } from "../../utilities/CommonModels";
import { Api } from "../../utilities/constants";
import "../Admin/Admin.css";
import UserGrid from "../Admin/UserGrid";
import {
  PieChart,
  Pie,
  Tooltip,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
  LineChart,
  Line,
} from "recharts";
import GraphCard from "../GraphCard/GraphCard";
import SankeyDiagram from "../SankeyDiagram/SankeyDiagram";
import DependencyWheel from "../DependencyWheel/DependencyWheel";
import Overview from "../Overview/Overview";

type AdminState = {
  confirmModalShow: (c: boolean) => void;
  ShowCreateUserPanel: boolean;
  userModel: IUser[];
};

const data = [
  { name: "Facebook", users: 2000000000 },
  { name: "Instagram", users: 1500000000 },
  { name: "Twiter", users: 1000000000 },
  { name: "Telegram", users: 500000000 },
];

class Admin extends Component<ILoggedInUser, AdminState> {
  constructor(props: ILoggedInUser) {
    super(props);
    this.state = {
      confirmModalShow: this.confirmModalShow,
      ShowCreateUserPanel: false,
      userModel: [],
    };
  }

  componentDidMount(): void {
    this.GetUser();
  }

  GetUser(): any {
    axios
      .get(`${Api.BaseUrl}${Api.GetUser}`)
      .then((response: any) => {
        if (
          !(response === undefined || response === null) &&
          response.status === 200
        ) {
          var data = response.data as IUser[];

          console.log("response", response.data);
          console.log("data", data);
          //   this.setState({userModel:data});
          return data;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  confirmModalShow(c: boolean) {}

  SearchOnChange(e: any) {}

  onSuccessDeletion() {}
  handleDelete = (id: string) => {};

  render(): React.ReactNode {
    return (

      <div className="main">
      <div className="main_wrapper main_wrapper_1">
        <Overview />
        <SankeyDiagram />
        <DependencyWheel></DependencyWheel>
      </div>
      <div className="main_wrapper main_wrapper_2">
      </div>
    </div>
      // <div className="admin">
      //   <div className="adminheader">
      //     <div className="adminheading">
      //       <span>Admin</span>
      //     </div>
      //     <div className="adminheaderright">
      //       <span className="adminsearchbox">
      //         <div className="form-group">
      //           <input
      //             id="SearchAdmin"
      //             type="text"
      //             placeholder="Search Member"
      //             className="adminsearchtext"
      //             onChange={(e) => this.SearchOnChange(e)}
      //           />
      //           <span className="fa fa-search fa-lg searchicon"></span>
      //         </div>
      //       </span>
      //       <span className="createuser">
      //         <Button
      //           className="btncreateuser"
      //           onClick={() => this.setState({ ShowCreateUserPanel: true })}
      //         >
      //           {" "}
      //           + ADD USER
      //         </Button>
      //         {/* {showCreateUserPanel ? <CreateUserPanel
      //                       onClose={() => setShowCreateUserPanel(false)}
      //                       onSubmitSuccess={updateSuccess}
      //                   /> : null} */}
      //       </span>
      //     </div>
      //   </div>
      //   <div>
      //       <SankeyDiagram></SankeyDiagram>

      //       <DependencyWheel></DependencyWheel>

      //     {/* <IncomeStatementBreakdown></IncomeStatementBreakdown> */}
      //     {/* <GraphCard graphType="Bar" data={data}></GraphCard> */}

      //     {/* <LineChart width={500}
      //     height={300}
      //     data={data}
      //     margin={{
      //       top: 5,
      //       right: 30,
      //       left: 80,
      //       bottom: 5,
      //     }}
      //     barSize={20}>
      //        <Line 
      //       dataKey="users" 
      //       type="monotone"
      //       stroke="#8884d8"
      //       />
      //       <XAxis
      //       dataKey="name"/>
      //        <YAxis />
      //       <Tooltip />
      //       <Legend />
      //       <CartesianGrid strokeDasharray="3 3" />
           
      //     </LineChart> */}

      //     {/* <UserGrid
      //       confirmModalShow={this.state.confirmModalShow}
      //       onSuccessDeletion={this.onSuccessDeletion}
      //       handleDelete={this.handleDelete}
      //       listofusers={this.state.userModel}
      //     ></UserGrid> */}
      //     {/* {userModal.length !== 0 ? <GridPagination currentPage={currentPage} usersPerPage={usersPerPage} totalUsers={totalUsers} indexofLastUser={indexofLastUser} indexofFirstUser={indexofFirstUser} paginate={paginate} ></GridPagination> : null} */}
      //     {/* <ConfirmationPopup show={showConfirmModal}
      //               confirmationMessage={constantsValues.deleteUserConfirmation}
      //               confirmationMessageDetail=""
      //               onHandleClose={handleClose} onHandleAccept={handleAccept} /> */}
      //   </div>
      // </div>
    );
  }
}

export default Admin;
