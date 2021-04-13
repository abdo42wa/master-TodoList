import React from 'react'
import {Button} from 'react-bootstrap'

const CustomButton = ({children,variant,onClick}) => {
    return (
        <div>
            <Button block variant={variant} type="submit" onClick={onClick}>{children}</Button>
        </div>
    )
}

export default CustomButton