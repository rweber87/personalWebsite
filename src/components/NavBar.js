import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

function NavBar() {

	return(
		<Navbar>
		    <Navbar.Header>
		      <Navbar.Brand>
		        <a href="/about">robbie weber</a>
		      </Navbar.Brand>
		    </Navbar.Header>
		    <Nav pullRight>
		      <NavItem eventKey={1} href="/about">about</NavItem>
		      <NavItem eventKey={2} href="#">work</NavItem>
		      <NavItem eventKey={2} href="#">projects</NavItem>
		      <NavItem eventKey={2} href="https://rweber87.github.io/log-a-blog/">blog</NavItem>
		    </Nav>
		</Navbar>
	)

}

export default NavBar;