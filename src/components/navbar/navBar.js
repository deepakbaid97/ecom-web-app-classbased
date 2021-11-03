import React, { Component } from 'react';
import { Dropdown, Header, Menu, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default class NavBar extends Component {
  state = { activeItem: 'account' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu inverted color="black">
          <Segment color="black" inverted>
            <Header as="h1" id="logo" textAlign="center">House of Baid's</Header>
          </Segment>
          <Link to="/">
            <Menu.Item
            name='Home'
            active={activeItem === 'Home'}
            onClick={this.handleItemClick}
            position="right"
            />
          </Link>
          <Link to="/products">
            <Menu.Item
            name='Product'
            active={activeItem === 'Product'}
            onClick={this.handleItemClick}
            />
          </Link>
          <Link to="/cart">
            <Menu.Item
            name='Cart'
            active={activeItem === 'Cart'}
            onClick={this.handleItemClick}
            
            />
        </Link>

        <Dropdown item text='Deepak'>
          <Dropdown.Menu>
            <Dropdown.Header>User options</Dropdown.Header>
            <Dropdown.Item>Login</Dropdown.Item>
            <Dropdown.Item>Logout</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Menu>
    )
  }
}