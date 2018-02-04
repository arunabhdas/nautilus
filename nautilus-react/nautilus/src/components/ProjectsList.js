import React, { Component } from 'react';
import './ProjectsList.css';


export default class ProjectsList extends Component {
  render() {
    return (
        <table>
                <thead>
                    <tr>
                        <th>name</th>
                        <th>Actions</th> 
                    </tr>
                </thead>
        </table>
    );
  }
}