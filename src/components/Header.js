import React from 'react'
import {Container, Nav,Navbar} from 'react-bootstrap'
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
            <Navbar.Brand href="#home">Master</Navbar.Brand>
          <Nav className="ml-auto">
          <LinkContainer to='/'>
                <Nav.Link>Home</Nav.Link>
          </LinkContainer>

            {!curentuser &&    
            <>
            <LinkContainer to='/login'>
                    <Nav.Link>Login</Nav.Link>
          </LinkContainer>

          <LinkContainer to='/register'>
                    <Nav.Link>Register</Nav.Link>
          </LinkContainer>
          </>
          }
            
          <Nav.Link onClick={logout}>Lougout</Nav.Link>
            
          </Nav>
            </Container>
        </Navbar>
      

      </>
    )
}

export default Header
