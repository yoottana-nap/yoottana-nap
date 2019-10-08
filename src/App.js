import React from 'react';
import Navbar from './Components/Navbar';
import Home from './Page/Home';
import About from './Page/About';
import Portfolio from './Page/Portfolio';
import Footer from './Components/Footer';
import Contact from './Page/Contact';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
class App extends React.Component {
  render() {

    return (
      <React.Fragment>

        <BrowserRouter>
          <div>
            <Navbar />
            <Switch>
              <Route exact path="/yoottana-nap" component={Home} />
              <Route path="/About" component={About} />
              <Route path="/Portfolio" component={Portfolio} />
              <Route path="/Contact" component={Contact} />
            </Switch>
          </div>
        </BrowserRouter>
        <div className="container">
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}
export default App;

