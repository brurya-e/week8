import './style.css';
import React from  "react";


class Increment extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0
    };
  }

  increment = () => {
    this.setState({
      counter: this.state.counter + 1
    });
  };
  decrement = () => {
    this.setState({
      counter: this.state.counter - 1
    });
  };

  getColorClass = () => {
    if (this.state.counter > 0) return "green";
    if (this.state.counter < 0) return "red";
    return "black";
  };
  
  render() {
  return (
      <div className="App">
        <button onClick={this.increment}>+</button>
        <div className={this.getColorClass()}>{this.state.counter}</div>
        <button onClick={this.decrement}>-</button>
      </div>
    );
}
}
export default Increment;