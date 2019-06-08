import React, { Component } from 'react'
// import axios from 'axios'
// import update from 'immutability-helper'
import { Nav, Navbar, NavItem } from "react-bootstrap"
import { Form, FormControl, Button } from "react-bootstrap"

class Header extends Component {
	constructor(props) {
		super(props)
		this.state = {			
		}
	}

  render() {
    return (
        <div className="App container">

            <Navbar bg="light" variant="light" fixed="top">
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-primary">Search</Button>
                </Form>
            </Navbar>
            <br />        
        </div>
    )
  }
}

export default Header