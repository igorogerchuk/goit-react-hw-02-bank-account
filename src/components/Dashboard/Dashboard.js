import React, { Component } from 'react';
import styles from './Dashboard.module.css';

class Dashboard extends Component {
  state = {
    transactions: [],
    balance: 0,
  };

  render() {
    <div class="dashboard">
      {/* <!-- Разметка компонента <Controls> --> */}
      <section class="controls">
        <input type="number" name="amount" />
        <button type="button">Deposit</button>
        <button type="button">Withdraw</button>
      </section>

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
    </div>;
  }
}

export default Dashboard;
