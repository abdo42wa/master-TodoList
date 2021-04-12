
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import {BrowserRouter,Route} from 'react-router-dom'
import { Container } from 'react-bootstrap';
import Login from './pages/Login';
import Register from './pages/Register';

const App = () => {
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
