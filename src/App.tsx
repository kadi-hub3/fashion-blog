import React from 'react';
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Beauty from './pages/Beauty/Beauty'
import Looks from './pages/Looks/Looks'
import Travel from './pages/Travel/Travel'
import Contact from './pages/Contact/Contact'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import { Route, Switch } from 'react-router-dom'

function App() {



  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/beauty' component={Beauty} />
        <Route exact path='/looks' component={Looks} />
        <Route exact path='/travel' component={Travel} />
      </Switch>
      <Footer />
    </>
  );

}


export default App;
