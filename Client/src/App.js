import React from 'react';
import {Route, Switch} from "react-router-dom";
import Home from "./Home";
import './App.css';
import BookBus from './Components/Booking/BookBus';
import Four0Four from './Components/404/Four0Four';

function App() {
  return (
    <main>
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/book-bus" component={BookBus} exact/>
        <Route path="*" component={Four0Four} />
        <Route component={Error}/>
      </Switch>
    </main>
  );
}

export default App;
