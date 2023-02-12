import React, { Component } from "react";
import "../IncomeStatementBreakdown/IncomeStatementBreakdown.css";

class IncomeStatementBreakdown extends Component {
  constructor(props: any) {
    super(props);
  }

  render(): React.ReactNode {
    return (
      <div className="container incomeStatementBreakdown-content">
        <div className="incomeStatementBreakdown-header">
          <div className="row">
            <div className="col-md-1 incomeStatementBreakdown-heading ">
              <div className="incomeStatementBreakdown-providingServices-bar">
                <div className="incomeStatementBreakdown-providingServices-wave">
                  Providing services
                </div>
              </div>
              <div className="incomeStatementBreakdown-rentingoutpremises-bar">
                <div className="incomeStatementBreakdown-rentingoutpremises-wave">
                  Renting out premises
                </div>
              </div>
              <div className="incomeStatementBreakdown-salesofproducts-bar">
                <div className="incomeStatementBreakdown-salesofproducts-wave">
                  Sales of products
                </div>
              </div>
              <div className="incomeStatementBreakdown-loans-bar">
                <div className="incomeStatementBreakdown-loans-wave">Loans</div>
              </div>
            </div>
            <div className="col-md-1 incomeStatementBreakdown-heading ">
              <div className="incomeStatementBreakdown-revenue-bar">
              <div className="incomeStatementBreakdown-revenue-wave">
                 Revenue
                </div>
              </div>
            </div>
            <div className="col-md-2 incomeStatementBreakdown-heading ">
              <div className="incomeStatementBreakdown-proceeds-bar">
                <div className="incomeStatementBreakdown-proceeds-wave">Proceeds</div>
              </div>
            </div>
            <div className="col-md-2 incomeStatementBreakdown-heading ">
              <div className="incomeStatementBreakdown-expenses-bar">
                <div className="incomeStatementBreakdown-expenses-wave">
                    Expenses
                </div>
              </div>
            </div>
            <div className="col-md-2 incomeStatementBreakdown-heading ">
              <div className="incomeStatementBreakdown-managerial-bar">
                <div className="incomeStatementBreakdown-managerial-wave">Managerial</div>
              </div>
              <div className="incomeStatementBreakdown-commercial-bar">
                <div className="incomeStatementBreakdown-commercial-wave">Commercial</div>
              </div>
              <div className="incomeStatementBreakdown-production-bar">
                <div className="incomeStatementBreakdown-production-wave">Production</div>
              </div>
            </div>
            <div className="col-md-1 incomeStatementBreakdown-heading ">
              <div className="incomeStatementBreakdown-personaltraining-bar">
              <div className="incomeStatementBreakdown-personaltraining-wave"></div>
              </div>
              <div className="incomeStatementBreakdown-officerental-bar"></div>
              <div className="incomeStatementBreakdown-travelallowance-bar"></div>
              <div className="incomeStatementBreakdown-advertising-bar"></div>
              <div className="incomeStatementBreakdown-wages-bar"></div>
              <div className="incomeStatementBreakdown-purchasesofrawmaterials-bar"></div>
              <div className="incomeStatementBreakdown-paymentofpercentageonloans-bar"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default IncomeStatementBreakdown;
