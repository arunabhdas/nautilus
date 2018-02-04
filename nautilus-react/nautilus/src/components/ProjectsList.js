import React, { Component } from 'react';
import './ProjectsList.css';
import ProjectsListHeader from './ProjectsListHeader';
import _ from 'lodash';
import ProjectsListItem from './ProjectsListItem';

export default class ProjectsList extends React.Component {

  renderItems() {
    return _.map(this.props.projects, (project, index) => <ProjectsListItem key={index} {...project } />);

  }
  render() {
      console.log(this.props.projects);
    return (
        <table>
            <ProjectsListHeader/>
            <tr>
                {this.renderItems()}
            </tr>
        </table>
    );
  }
}