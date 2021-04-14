import React from 'react'
import {Container, Nav,Navbar,NavDropdown} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import {useSelector,useDispatch} from 'react-redux'
import { userLogout } from '../redux/UserAction'
import {useHistory} from 'react-router-dom'
import {auth} from '../firebase'

const Header = () => {
    const user = useSelector((state)=> state.user)
    const {curentuser} = user
    const history = useHistory()
    const dispatch = useDispatch();

    const logout = () => {
        dispatch(userLogout())  
        auth.signOut();
        history.push('/login')
    }
    return (
        <>
        <Navbar  variant="dark">
            <Container>
            <LinkContainer to='/'>
            <Navbar.Brand >Master</Navbar.Brand>
            </LinkContainer>
          <Nav className="ml-auto">
          <LinkContainer to='/'>
                <Nav.Link>Home</Nav.Link>
          </LinkContainer>

            {!curentuser ?(  
            <>
            <LinkContainer to='/login'>
                    <Nav.Link>Login</Nav.Link>
          </LinkContainer>

          <LinkContainer to='/register'>
                    <Nav.Link>Register</Nav.Link>
          </LinkContainer>
          </>
          ):(
            <NavDropdown title={curentuser.displayName} id="basic-nav-dropdown">
            <LinkContainer to='/create/task' >
            <NavDropdown.Item>Create Task</NavDropdown.Item>
            </LinkContainer>
          <NavDropdown.Item href="#action/3.2">tasks</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">History</NavDropdown.Item>
          </NavDropdown>
          )
          }
            
            
          <Nav.Link onClick={logout}>Lougout</Nav.Link>
            
          </Nav>
            </Container>
        </Navbar>
      

      </>
    )
}

export default Header
