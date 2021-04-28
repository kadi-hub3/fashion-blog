import React from 'react';
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Beauty from './pages/Beauty/Beauty'
import Looks from './pages/Looks/Looks'
import Travel from './pages/Travel/Travel'
import { Route, Switch } from 'react-router-dom'

function App() {



  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/about' component={About} />
      <Route exact path='/beauty' component={Beauty} />
      <Route exact path='/looks' component={Looks} />
      <Route exact path='/travel' component={Travel} />
    </Switch>
  );

}


export default App;
