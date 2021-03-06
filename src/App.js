import React from 'react';
import {BrowserRouter as Router ,  Route} from 'react-router-dom';
import Join from './Components/Join/Join';
import Chat from './Components/Chat/Chat';
import Home from './Components/Home/Home';
const App = () =>{
    return(
        <Router>
            <Route exact path="/" component={Home} />
            <Route exact path="/join" component={Join} />
            <Route path="/chat" component={Chat} />
        </Router>
    );
}
export default App;