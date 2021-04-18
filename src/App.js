import React,{useEffect} from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Header from './components/Header';
import {BrowserRouter,Route} from 'react-router-dom'
import { Container } from 'react-bootstrap';
import Login from './pages/Login';
import Register from './pages/Register';
import {auth,createUserProfileDocument} from './firebase'
import { useDispatch } from 'react-redux';
import { userLogin, userLogout } from './redux/UserAction';
import HomePage from './pages/HomePage';
import CreateTask from './pages/CreateTask';
import Tasks from './pages/Tasks';


const App = () => {
  const dispatch = useDispatch(); 
  useEffect(()=>{
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user){
        //console.log('user======>', user)
        const userRef = await createUserProfileDocument(user);
          userRef.onSnapshot(snapshot => {
            dispatch(userLogin({
              id: snapshot.id,
              ...snapshot.data()
            }))
          })
      }else{
        dispatch(userLogout())
      }
      
    })

    return () =>{
      unsubscribe ()
    };
    
  },[dispatch])
  return (
  <div className='app'>
      <BrowserRouter>
        <Header />
        <ToastContainer />
        <main className=''>
        <Container>
           
            <Route path='/login' component={Login} />
            <Route path='/register' component={Register} />
            <Route path='/create/task' component={CreateTask} />
            <Route path='/tasks' component={Tasks} />
            <Route path='/' component={HomePage} exact />
        </Container>
        </main>
    </BrowserRouter>
  </div>
  );
}

export default App;
