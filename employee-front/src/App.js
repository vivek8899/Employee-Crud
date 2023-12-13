
import './App.css';

import {BrowserRouter as Router , Route , Switch} from 'react-router-dom'
import FooterComponents from './components/FooterComponents';
import HeaderComponents from './components/HeaderComponents';
import ListEmployee from './components/ListEmployee';
import CreateEmployee from './components/CreateEmployee';
import UpdateEmployee from './components/UpdateEmployee';
import ViewEmployee from './components/ViewEmployee';

function App() {
  return (
    <div>
   <Router>
   

 
    <HeaderComponents />
    <div className="container">
    <Switch>
    <Route path="/" exact component = {ListEmployee}></Route>
    <Route path="/emp" component = {ListEmployee}></Route>
    //step1
    <Route path="/add/:id" component = {CreateEmployee}></Route>
    <Route path="/view/:id" component = {ViewEmployee}></Route>
    {/* <Route path="/update/:id" component = {UpdateEmployee}></Route> */}

     
      </Switch>

    </div>
    <FooterComponents />
   
    </Router>
    </div>
    

   
  );
}

export default App;
