import React, { Component } from 'react';

const TransactionType = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

export default class Controls extends Component {
  state = {
    amount: '',
  };

  handleInput = e => {
    this.setState({ amount: e.currentTarget.value });
  };

  handleDepositButton = () => {
    this.props.handleClick(this.state.amount, TransactionType.DEPOSIT);
    this.setState({ amount: '' });
  };

  handleWithdrawButton = () => {
    this.props.onWithdraw(this.state.amount, TransactionType.WITHDRAW);
    this.setState({ amount: '' });
  };

  render() {
    const { amount } = this.state;
    return (
      <section class="controls">
        <input
          type="number"
          name="amount"
          value={amount}
          onChange={this.handleInput}
        />
        <button type="button" onClick={this.handleDepositButton}>
          Deposit
        </button>
        <button type="button" onClick={this.handleWithdrawButton}>
          Withdraw
        </button>
      </section>
    );
  }
}
