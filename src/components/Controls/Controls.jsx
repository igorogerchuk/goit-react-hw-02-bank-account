import React, { Component } from "react";

export default class Controls extends Component {
  state = {
    amount: ""
  };

  handleInput = e => {
    this.setState({ amount: e.currentTarget.value });
  };

  handleDepositButton = () => {
    this.props.onDeposit(this.state.amount);
    this.setState({ amount: "" });
  };

  handleWithdrawButton = () => {
    this.props.onWithdraw(this.state.amount);
    this.setState({ amount: "" });
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
