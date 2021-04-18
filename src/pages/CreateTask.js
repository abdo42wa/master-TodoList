import React,{useState} from 'react'
import { Container,Row, Col, Form } from 'react-bootstrap'
import CustomButton from '../components/CustomButton'
import CustomInput from '../components/CustomInput'
import {useSelector} from 'react-redux'
import db from '../firebase'
import firebase from 'firebase'
import {toast} from 'react-toastify'
//import {createTaskAction} from '../redux/UserAction'



const CreateTask = ({history}) => {
    
    const [title,setTitle] = useState('');
    const [description,setDescription] = useState('');

    const user = useSelector((state)=> state.user)
    const {curentuser} = user
//    const dispatch = useDispatch()

    const handleTask = (e) => {
        e.preventDefault()
        try {
            db.collection('users').doc(curentuser.id).collection('tasks').add({
                title: title,
                description: description,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                complete: false
            })

           
            setTitle('');
            setDescription('');
            toast.success('You have created new task successful')
            //history.push('/tasks')
            
        } catch (error) {
            console.log(error)
        }
        
    }
    return (
        <div className='create-task-page'>
            <Container>
                <Row>
                    <Col md={6}>
                    <Form>
                    <CustomInput  lable='Title' value={title} onChange={(e) => setTitle(e.target.value)}/>
                    <CustomInput  lable='Description' value={description} onChange={(e) => setDescription(e.target.value)}/>
                    <CustomButton onClick={handleTask}>Add new task</CustomButton>
                    </Form>
                    </Col>
                    <Col md={6}>
                    <div className='bacground-image-task' ></div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default CreateTask
