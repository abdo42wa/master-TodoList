import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import {useSelector} from 'react-redux'

const HomePage = () => {
    const user =  useSelector((state) => state.user)
    const {curentuser} =  user
    console.log( 'im user',curentuser);
    
    
    return (
        <div className='home-page'>
            <Container>
            <h1>Welcom Back </h1>
            <Row>
                <Col md={6}>
                        <div className='home-page-inf'>
                        <h2 >Master Viva</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </div>

                </Col>

                <Col>
                       <div className='home-page-background'>
                          
                       </div>

                </Col>
            </Row>
            </Container>
        </div>
    )
}

export default HomePage
