import React, { Component } from 'react';
import logo from './logo.webp';
import './App.css';


class Element extends Component {
  constructor(props) {
    super(props);
    this.state = {completed: props.element.completed};
  }

  change() {
    this.setState({completed: !this.state.completed});
  }

  render() {
    return (
      <div className={"table-row" + (this.state.completed ? " table-row-blackout" : "")}>
        <div>{this.props.element.userId}</div>
        <div>{this.props.element.id}</div>
        <div>{this.props.element.title}</div>
        <div>
          <button onClick={this.change.bind(this)}>
            {this.state.completed ? "SET NOT DONE" : "SET DONE"}
          </button>
        </div>
      </div>
    )
  }
}

class App extends Component {
  constructor(){
    super();
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }

  renderElements() {
    return this.state.data.map(element =>
      <Element key={element.id} element = {element} />
    );
  }

  render() {
    return (
      <div className="content">
        <header className="header">
          <img src={logo} className="logo" alt="logo" />
          <h1>Sberbank-app</h1>
        </header>
        <div className="table-header">
          <div>User ID</div>
          <div>ID</div>
          <div>Title</div>
          <div>Button</div>
        </div>
        {this.renderElements()}
      </div>
    );
  }
}

export default App;
