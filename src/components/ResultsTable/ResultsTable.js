import React from "react";
import classes from "./ResultsTable.module.css";

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "MYR",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

function ResultsTable({ data, initialInvestment }) {
  return (
    <div>
      <table className={classes.result}>
        <thead>
          <tr>
            <th>Year</th>
            <th>Total Savings</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {data.map((data) => (
            <tr>
              <td>{data.year}</td>
              <td>{formatter.format(data.savingsEndOfYear)}</td>
              <td>{formatter.format(data.yearlyInterest)}</td>
              <td>
                {formatter.format(
                  data.savingsEndOfYear -
                    initialInvestment -
                    data.yearlyContribution * data.year
                )}
              </td>
              <td>
                {formatter.format(
                  initialInvestment + data.yearlyContribution * data.year
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ResultsTable;
