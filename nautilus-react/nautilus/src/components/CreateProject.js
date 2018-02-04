import React, { Component } from 'react';
import { type } from 'os';
import { Input } from 'element-react';
import { Button } from 'element-react';
export default class CreateProject extends React.Component {

  render() {
    
    return (
        <form onSubmit={this.handleCreate.bind(this)}>
            <Input type="text" placeholder="??" ref="createInput" />
            <Button plain={true} type="success">Create</Button>
        </form>
    );
  }

  handleCreate(event) {
      event.preventDefault();
      
      console.log(this.refs.createInput.value);
  }
}