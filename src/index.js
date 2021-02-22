import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { Home, Heroes, CreateHero, UpdateHero, Login } from './components';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
//Bootstrap styling imports
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav} from 'react-bootstrap';
import marvel from '../src/assets/images/marvel.png';
import { FirebaseAppProvider, AuthCheck } from 'reactfire';
import {firebaseConfig} from './firebaseConfig';
import 'firebase/auth';

ReactDOM.render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
    <Router>
    
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="/">
        <img
          src={marvel}
          href="/"
          width="75"
          height="30"
          className="d-inline-block align-top"
          alt="Marvel Logo"
        />
      </Navbar.Brand>

      <Nav className="justify-content-end">
      <AuthCheck fallback={
        <Nav.Link>
        <Link to="/login">Login</Link>
      </Nav.Link>
      }>
      <Nav.Link>
        <Link to="/heroes">Heroes</Link>
      </Nav.Link>
      <Nav.Link>
        <Link to="/login">Logout</Link>
      </Nav.Link>
      </AuthCheck>
      </Nav>

    </Navbar>

      <Switch>
        <Route exact path='/'>
          <Home title='Heroes of Marvel'/>
        </Route>
        <Route path='/heroes'>
          <Heroes />
        </Route>
        <Route path='/create'>
          <CreateHero />
        </Route>
        <Route path='/update'>
          <UpdateHero />
        </Route>
        <Route path='/login'>
          <Login />
        </Route>

      </Switch>
    
    </Router>
    </FirebaseAppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
