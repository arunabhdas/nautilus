import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ProjectsList from './components/ProjectsList';


const projects = [
  {
      name: 'Launch Mars Rover',
      isCompleted: false
  },
  {
      name: 'Launch satellite',
      isCompleted: false
  }
]

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      projects: projects
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Nautilus</h1>
        </header>
        <p className="App-intro">
          <ProjectsList projects={this.state.projects}/>
        </p>
      </div>
    );
  }
}

export default App;
