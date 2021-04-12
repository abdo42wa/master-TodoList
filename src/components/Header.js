import React from 'react'
import {Nav,Navbar} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'

const Header = () => {
    return (
        <>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">Master</Navbar.Brand>
          <Nav className="ml-auto">
          <LinkContainer to='/'>
                <Nav.Link>Home</Nav.Link>
          </LinkContainer>

          <LinkContainer to='/login'>
                    <Nav.Link>Login</Nav.Link>
          </LinkContainer>

          <LinkContainer to='/register'>
                    <Nav.Link>Register</Nav.Link>
          </LinkContainer>
            
          <Nav.Link>Lougout</Nav.Link>
            
          </Nav>
        </Navbar>
      

      </>
    )
}

export default Header
