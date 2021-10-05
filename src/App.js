// import component & bootstrap & router
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch,Route } from 'react-router-dom';
import './App.css';
import About from './Component/About us/About';
import Courses from './Component/Courses/Courses';
import Footer from './Component/Footer/Footer';
import Header from './Component/Header';
import Home from './Component/Home/Home';
import Notfound from './Component/Notfound/Notfound';
import Services from './Component/Services/Services';
// Router
function App() {
  return (
    <div className="App">
      <Router>
      <Header></Header>
        <Switch>
          <Route exact path="/">
          <Home></Home>
           </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/courses">
              <Courses></Courses>
          </Route>
          <Route path="/services">
            <Services></Services>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="*">
            <Notfound></Notfound>
          </Route>
        </Switch> 
        <Footer></Footer>
       </Router>
    </div>
  );
}

export default App;
