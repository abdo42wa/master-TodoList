import React from 'react'
import {Button} from 'react-bootstrap'

const CustomButton = ({children,variant}) => {
    return (
        <div>
            <Button block variant={variant} type="submit">{children}</Button>
        </div>
    )
}

export default CustomButton