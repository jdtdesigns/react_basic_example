import React, { Component } from 'react';
import firebase from './firebase';

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  addName = (e) => {
    e.preventDefault();

    firebase.database().ref('names').push({name: this.state.name});

    this.setState({name: ''});
  }

  render() {
    return (
      <div>
        <h1>Basic App</h1>

        <form>
          <input type="text"
            name="name"
            placeholder="Name"
            onChange={this.handleChange}
            value={this.state.name}/>

          <button onClick={this.addName}>Submit</button>
        </form>
      </div>
    );
  }
}

export default App;
