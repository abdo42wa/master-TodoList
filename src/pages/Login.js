import React,{useState} from 'react'
import {Container,Row,Col, Form} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import CustomButton from '../components/CustomButton'
import CustomInput from '../components/CustomInput'

const Login = () => {
    const [haved,sethoved] = useState(false);
    return (
        
     
            <div className='login-page mt-5'>
         
         <Container>
             <h1>Login</h1>
             <Row >
             <Col md={5} >
             <Form>
                 <CustomInput lable='Email' type='email'/>
                 <CustomInput lable='Password' type='password' onFocus={() => sethoved(true)} onBlur={() => sethoved(false)} />

                 <CustomButton variant='dark' type="submit">LOGIN </CustomButton>
                 <CustomButton variant='danger'>LOGIN using Google </CustomButton>
                
                 
                 <Link to='/register'>New user? Create an account</Link>
             </Form>
             </Col>
             <Col md={6} className='offset-md-1' >
                 <div className={ haved ? 'bacground-image-login-hover' : 'bacground-image-login'} ></div>
             </Col>
             
             </Row>
             </Container>    
         </div>
       
    )
}

export default Login
