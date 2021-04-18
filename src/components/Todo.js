import React,{useState} from 'react'
import {Modal,Button} from 'react-bootstrap'
import { useSelector } from 'react-redux'
import db from '../firebase'
import {toast} from 'react-toastify'
import CustomInput from './CustomInput'

const Todo = ({title,description,complete,id}) => {
    const user = useSelector((state)=> state.user)
    const {curentuser} = user
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  

    const handleStatus = () => {
        if(curentuser){
            db.collection('users').doc(curentuser.id).collection('tasks').doc(id).update({

                complete: !complete

               
            })
            if(!complete){
                toast.success('Niec work')
            }

        }
       
    }

    const handledelet = () => {
        if(curentuser){
           db.collection('users').doc(curentuser.id).collection('tasks').doc(id).delete()
            toast.warning('One task has been deleted')
        }
       
    }
    return (
            <>
                    <div className='one-task mb-4' key={id} >
                        <p className='task-title'>{title}</p>
                        <p className={`${description.length === 0 ? 'no-description' : 'task-description' }`}>{description.length === 0 ? 'No Notes for this task' : description}</p>
                        {/* <p className='task-status'>{complete ? <i className='fas fa-check task-done'></i> : <i className="fas fa-times"></i>}</p> */}
                        <p className={`${complete ? 'task-done' : 'task-not-done'}`}></p>
                        <div className='task-controls'>
                        <i className='fas fa-trash' onClick={handledelet}></i>
                        <i className='fas fa-check' onClick={handleStatus}></i>
                        <i className='fas fa-edit' onClick={handleShow}></i>
                        </div>
                    </div>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>Edit Task</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <CustomInput lable='title' value={title} />
                        <CustomInput lable='description' value={description} />
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                    </Modal.Footer>
                </Modal>
               </> 
    )
}

export default Todo
