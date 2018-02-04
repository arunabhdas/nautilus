import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'element-react';

import 'element-theme-default';

export default class ProjectsListItem extends React.Component {

  constructor(props) {
      super(props);

      this.state = {
          isEditing: false
      };
  }

  renderActionSection() {
      if (this.state.isEditing) {
          return (
            <td>
                <Button type="primary">Save</Button>
                <Button onClick={this.onCancelClick.bind(this)}>Cancel</Button>
            </td>
          );
      }

      return (
        <td>
        <Button type="primary" onClick={this.onEditClick.bind(this)}>Edit</Button>
        <Button plain={true} type="danger">Delete</Button>
        </td>
      );
  }

  render() {
    return (
        <tr>
            <td>{this.props.name}</td>
            {this.renderActionSection()}
        </tr>
    );
  }

  onEditClick() {
      this.setState( { isEditing: true });
  }

  onCancelClick() {
    this.setState( { isEditing: false });
  }
}