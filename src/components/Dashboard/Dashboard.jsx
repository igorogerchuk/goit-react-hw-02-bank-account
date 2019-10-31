import React, { Component } from "react";
import styles from "./Dashboard.module.css";
import Controls from "../Controls";
import { toast } from "react-toastify";
const uuidv4 = require("uuid/v4");

const TransactionType = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw"
};

export default class Dashboard extends Component {
  state = {
    transactions: [],
    balance: 0
  };

  addTransaction = (amount, type) => {
    const transaction = {
      id: uuidv4(),
      type,
      amount,
      date: new Date().toLocaleString()
    };

    this.setState(state => ({
      transactions: [...state.transactions, transaction]
    }));
  };

  handleDeposit = amount => {
    this.addTransaction(amount, TransactionType.DEPOSIT);
    this.setState(state => ({
      balance: state.balance + Number(amount)
    }));
  };

  handleWithdraw = amount => {
    const { balance } = this.state;
    if (amount > balance) {
      toast.error("На счету недостаточно средств для проведения операции!");
      return;
    }
    this.addTransaction(amount, TransactionType.WITHDRAW);
    this.setState(state => ({
      balance: state.balance - Number(amount)
    }));
  };

  count = () => {
    const sums = this.state.transactions.reduce(
      (acc, transaction) => {
        return {
          ...acc,
          [transaction.type]: acc[transaction.type] + Number(transaction.amount)
        };
      },
      {
        deposit: 0,
        withdraw: 0
      }
    );
    console.log(sums);
    return sums;
  };

  render() {
    return (
      <div class="dashboard">
        {/* <!-- Разметка компонента <Controls> --> */}
        <Controls
          onDeposit={this.handleDeposit}
          onWithdraw={this.handleWithdraw}
        />
        {/* <!-- Разметка компонента <Balance> --> */}
        <section class="balance">
          <span>⬆️{this.count().deposit}$</span>
          <span>⬇️{this.count().withdraw}$</span>
          <span>Balance: {this.state.balance}$</span>
        </section>

        {/* <!-- Разметка компонента <TransactionHistory> --> */}
        <table class="history">
          <thead>
            <tr>
              <th>Transaction</th>
              <th>Amount</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Deposit</td>
              <td>200$</td>
              <td>4/17/2019, 12:45:17</td>
            </tr>
            <tr>
              <td>Withdrawal</td>
              <td>100$</td>
              <td>4/18/2019, 14:15:23</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
