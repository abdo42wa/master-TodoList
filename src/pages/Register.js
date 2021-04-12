import React,{useState} from 'react'
import {Row,Col, Form,Container} from 'react-bootstrap'
import CustomButton from '../components/CustomButton'
import CustomInput from '../components/CustomInput'

const Register = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [Password, setPassword] = useState('')
    const [confermPassword, setConfermPassword] = useState('')
    return (
        <div className='register-page mt-5'>
        <Container>
            <h2 className='text-center' >REGISTRATION</h2>
                    <Row className='justify-content-center'>
                            <Col md={5}>
                            <Form>
                                <CustomInput lable='Username' type='txt' value={username} onChange={(e) => setUsername(e.target.value)}/>
                                <CustomInput lable='Email' type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                                <CustomInput lable='Password' type='password' value={Password} onChange={(e) => setPassword(e.target.value)}  />
                                <CustomInput lable='ConfermPassword' type='password' value={confermPassword} onChange={(e) => setConfermPassword(e.target.value)} />
                                <CustomButton variant='dark' type="submit">Register </CustomButton>
                            </Form>
                            </Col>
                            <Col md={1}/>
                            <Col md={4} className= 'bacground-image-regester'>

                            </Col>
                    
                    </Row> 
                    </Container>
        </div>
    )
}

export default Register
