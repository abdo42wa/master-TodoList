import React,{useEffect} from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import {BrowserRouter,Route} from 'react-router-dom'
import { Container } from 'react-bootstrap';
import Login from './pages/Login';
import Register from './pages/Register';
import {auth} from './firebase'
import { useDispatch } from 'react-redux';
import { userLogin, userLogout } from './redux/UserAction';

const App = () => {
  const dispatch = useDispatch(); 
  useEffect(()=>{
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user){
        console.log('user======>', user)

        dispatch(userLogin({
          username: user.displayName,
          email: user.email,
          id: user.uid
        }))
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
        <main className='py-3'>
        <Container>
            <Route path='/login' component={Login} />
            <Route path='/register' component={Register} />
        </Container>
        </main>
    </BrowserRouter>
  </div>
  );
}

export default App;
