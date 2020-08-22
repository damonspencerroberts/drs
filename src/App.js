import React, {Component} from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import routingArray from "./json/routes/routing";



class App extends Component {
  render() {
    return (      
       <BrowserRouter>
        <div>
            <Switch>
             {routingArray.map(e => <Route key = {e.key} path = {e.pathWay} component={e.content} exact/>)}
           </Switch>
        </div> 
      </BrowserRouter>
    );
  }
}
 
export default App;
