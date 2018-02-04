import React, { Component } from 'react';
import { type } from 'os';

export default class CreateProject extends React.Component {

  render() {
    
    return (
        <form>
            <input type="text" placeholder="??"/>
            <button>Create</button>
        </form>
    );
  }
}