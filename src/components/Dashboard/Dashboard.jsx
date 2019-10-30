import React, { Component } from 'react';
import styles from './Dashboard.module.css';
import Controls from '../Controls';
const uuidv4 = require('uuid/v4');

export default class Dashboard extends Component {
  state = {
    transactions: [],
    balance: 0,
  };

  addTransaction = (amount, type) => {
    const transaction = {
      id: uuidv4(),
      type,
      amount,
      date: new Date().toLocaleString(),
    };

    this.setState(state => ({
      transactions: [...state.transactions, transaction],
    }));
  };

  // handleWithdraw = amount => {
  //   const transaction = {
  //     id: 2,
  //     type: 'withdraw',
  //     amount,
  //     date: new Date().toLocaleString(),
  //   };

  //   this.setState(state => ({
  //     transactions: [...state.transactions, transaction],
  //   }));
  // };

  render() {
    return (
      <div class="dashboard">
        {/* <!-- Разметка компонента <Controls> --> */}
        <Controls
          handleClick={this.addTransaction}
          // onDeposit={this.handleDeposit}
          // onWithdraw={this.handleWithdraw}
        />
        {/* <!-- Разметка компонента <Balance> --> */}
        <section class="balance">
          <span>⬆️2000$</span>
          <span>⬇️1000$</span>
          <span>Balance: 5000$</span>
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
