import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from './Components/Home/Home';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Header from './Components/Header/Header';
import Courses from './Components/Courses/Courses';
import NotFound from './Components/NotFound/NotFound';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <Router>
    <Header></Header>
    <Switch>
      <Route exact path='/'>
        <Home></Home>
      </Route>
      <Route path='/home'>
        <Home></Home>
      </Route>
      <Route path='/courses'>
        <Courses></Courses>
      </Route>
      <Route path='/about'>
        <About></About>
      </Route>
      <Route path='/contact'>
        <Contact></Contact>
      </Route>
      <Route path='*'>
        <NotFound></NotFound>
      </Route>
    </Switch>
    <Footer></Footer>
  </Router>
  );
}

export default App;
