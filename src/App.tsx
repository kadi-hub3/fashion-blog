import React, { useState } from 'react';
import Home from './pages/Home/Home'
import SinglePost from './pages/SinglePost/SinglePost'
import About from './pages/About/About'
import Beauty from './pages/Beauty/Beauty'
import Looks from './pages/Looks/Looks'
import Travel from './pages/Travel/Travel'
import Shop from './pages/Shop/Shop'
import Contact from './pages/Contact/Contact'
import Error from './pages/Error/Error'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import { Route, Switch } from 'react-router-dom'
import data from '../src/data/data'

function App() {

  const [posts, setPosts] = useState(data)

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
        <Route exact path='/shop' component={Shop} />
        <Route exact path='/post/:id' render={({ match }) => (
          <SinglePost post={posts.find(p => p.id.toString() === match.params.id)} />
        )} />
        <Route component={Error} />
      </Switch>
      <Footer />
    </>
  );

}


export default App;
