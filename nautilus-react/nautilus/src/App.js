import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ProjectsList from './components/ProjectsList';
import CreateProject from './components/CreateProject';
import { i18n } from 'element-react';
import locale from 'element-react/src/locale/lang/en';
import AppHeader from './components/AppHeader';

i18n.use(locale);

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
        <AppHeader></AppHeader>
        <p className="App-intro">
          <CreateProject/>
          <ProjectsList projects={this.state.projects}/>
        </p>
      </div>
    );
  }
}

export default App;
