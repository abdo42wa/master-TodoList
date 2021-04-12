import React from 'react'
import {Form} from 'react-bootstrap'
//import './CustomInput.css'

const CustomInput = ({lable,placeholder,type,onFocus,onBlur,value,onChange}) => {
    return (
        <div>
   
            <Form.Group controlId="formBasicEmail">
                    <Form.Label className='input-lable'>{lable}</Form.Label>
                    <Form.Control required type={type} placeholder={placeholder} onFocus={onFocus} onBlur={onBlur} value={value} onChange={onChange}/>
            </Form.Group>
        </div>
    )
}

export default CustomInput
