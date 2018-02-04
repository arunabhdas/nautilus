
import React, { Component } from 'react';
import { Menu } from 'element-react';

export default class AppHeader extends Component {

render() {
    return (
        <div>
        <Menu theme="dark" defaultActive="1" className="el-menu-demo" mode="horizontal" onSelect={this.onSelect.bind(this)}>
          <Menu.Item index="1">Nautilus</Menu.Item>
          <Menu.SubMenu index="2" title="Workspace">
            <Menu.Item index="2-1">Option 1</Menu.Item>
            <Menu.Item index="2-2">Option 2</Menu.Item>
            <Menu.Item index="2-3">Option 3</Menu.Item>
          </Menu.SubMenu>
          <Menu.Item index="3">Projects</Menu.Item>
        </Menu>
        <div className="line"></div>
      </div>
    )
  }
  onSelect() {

    }

}

