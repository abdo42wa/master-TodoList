import React,{useEffect,useState} from 'react'
import {Col } from 'react-bootstrap'
import db from '../firebase'
import {useSelector} from 'react-redux'
import Todo from '../components/Todo'

const CompleteTask = () => {

    const user = useSelector((state)=> state.user)
    const {curentuser} = user
    const [tasks,setTasks] = useState([]);
    
    useEffect(() => {
        if(curentuser){
            db.collection('users').doc(curentuser.id).collection('tasks').orderBy('timestamp', 'desc').onSnapshot((snapshot) =>
            
            
            setTasks(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    title: doc.data().title,
                    description:   doc.data().description,
                    complete:   doc.data().complete
                }))
            )
            
            )
            
        }

    },[curentuser])

    return (
        <div className='tasks-page mt-5'>
            
            <Col md={12} >
            {tasks.map((task)=> (
                task.complete &&
                <Todo title={task.title} complete={task.complete} id={task.id} description={task.description} key={task.id}/>
                ))}
                {tasks.length === 0 && <h1 className='not-tasks'>You have not tasks to show</h1>}
             </Col>

            
            
        </div>
    )
}

export default CompleteTask
