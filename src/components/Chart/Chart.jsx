import React, { useState } from "react";

import { useSelector } from "react-redux";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

function Chart() {
  const { balance, previous } = useSelector(
    (state) => state
  );
  const [monthlyVal, setMonthlyVal] =
    useState(null);

  let initialBalance = balance;
  let yLabel = [];

  let emi = monthlyVal;
  if (!emi) {
    emi = 1;
    initialBalance = 0;
  }

  let Xaxis = Math.ceil(initialBalance / emi);
  let xLabel = [];
  for (let i = 0; i <= Xaxis; i++) {
    xLabel.push(i);
  }
  let value = initialBalance;
  for (let i = 0; i <= Xaxis; i++) {
    if (value < 0) {
      value = 0;
    }
    yLabel.push(value);
    value = value - emi;
  }

  const data = xLabel.map((label, index) => ({
    name: label,
    balance: yLabel[index],
  }));

  const handleCalculate = (e) => {
    e.preventDefault();

    let x = document.getElementById("abc").value;

    if (balance / x > 200) {
      alert("Please increase your amount.");
    } else {
      setMonthlyVal(x);
    }
  };

  const renderLineChart = (
    <ResponsiveContainer
      width="70%"
      aspect={2}
      height="70%"
    >
      <LineChart
        data={data}
        margin={{
          right: 10,
          left: 10,
        }}
      >
        <CartesianGrid strokeDasharray="10 10" />
        <XAxis interval={"preserveStartEnd"} />
        <YAxis />
        <Tooltip
          contentStyle={{
            backgroundColor: "gray",
          }}
        />
        <Legend />
        <Line
          type="linear"
          dataKey="balance"
          stroke="#8ab4f8"
        />
      </LineChart>
    </ResponsiveContainer>
  );

  return (
    <div className="chart">
      <div>
        <h2>Initial Balance: {balance}</h2>
        <div className="monthlyPayment">
          <p>Monthly Payment</p>
          <form onSubmit={handleCalculate}>
            <input type="number" id="abc" />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
      <hr />

      <h3 className="addingGap">
        Balance of accounts after a number of
        months
      </h3>

      <div className="chart">
        {renderLineChart}
      </div>
    </div>
  );
}

export default Chart;
