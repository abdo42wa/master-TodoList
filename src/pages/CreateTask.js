import React,{useState} from 'react'
import { Container,Row, Col, Form } from 'react-bootstrap'
import CustomButton from '../components/CustomButton'
import CustomInput from '../components/CustomInput'

const CreateTask = () => {
    
    return (
        <div className='create-task-page'>
            <Container>
                <Row>
                    <Col md={6}>
                    <Form>
                    <CustomInput  lable='Title'/>
                    <CustomInput  lable='Discreption'/>
                    <CustomButton>Add new task</CustomButton>
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
