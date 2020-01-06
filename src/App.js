import React from 'react';
import '../src/App.css';



class App extends React.Component {
  state = {
    total: 0,
  }
  
  incrementDecrement = (op) => {
    if (op === "+") {
      this.setState({total: this.state.total + 1})
    } else if (op === "-") {
      this.setState({total: this.state.total - 1})
    }
  }

  render() {
    return (
      <div className="App">        
        <button className="button" onClick={() => this.incrementDecrement("+")}>+</button>
        <div className="result">
          {this.state.total}
        </div>
        <button className="button" onClick={() => this.incrementDecrement("-")}>-</button>
      </div>
    );
  }
}

export default App;
