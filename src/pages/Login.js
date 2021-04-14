import React,{useState} from 'react'
import {Container,Row,Col, Form} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import CustomButton from '../components/CustomButton'
import CustomInput from '../components/CustomInput'
import {auth,googleProvider} from '../firebase'
import {userLogin} from '../redux/UserAction'
import {useDispatch} from 'react-redux'
import {toast} from 'react-toastify'

const Login = ({history}) => {
    const [haved,sethoved] = useState(false);
    const dispatch = useDispatch();
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const loginWithgoogle = async (e) => {
        e.preventDefault()
           auth.signInWithPopup(googleProvider).then(async result =>{
               const {user} = result
                dispatch(userLogin({
                    email : user.email,
                    username: user.displayName,
                    id: user.uid
                }))
                history.push('/')
           })
    }

    const handelLogin = async (e) => {
        e.preventDefault(e);
       try {
           await  auth.signInWithEmailAndPassword(email,password);
           setPassword('');
           setEmail('')
           history.push('/');
           toast.success('Successful login')

       } catch (error) {
           console.log(error);
           toast.error('Wrong email or password')
           setPassword('');
           setEmail('')
       }
    }
    return (

     
            <div className='login-page mt-5'>
         
         <Container>
             <h1>Login</h1>
             <Row >
             <Col md={5} >
             <Form>
                 <CustomInput lable='Email' type='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                 <CustomInput lable='Password' type='password' onFocus={() => sethoved(true)} onBlur={() => sethoved(false)} value={password} onChange={(e) => setPassword(e.target.value)} />

                 <CustomButton variant='dark' type="submit" onClick={handelLogin}>LOGIN </CustomButton>
                 <CustomButton variant='danger' onClick={loginWithgoogle} >LOGIN using Google </CustomButton>
                
                 
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
