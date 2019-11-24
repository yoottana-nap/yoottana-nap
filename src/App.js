import React from 'react';
import Home from './Page/Home';
import About from './Page/About';
import Portfolio from './Page/Portfolio';
import Contact from './Page/Contact';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
class App extends React.Component {
  render() {

    return (
      <React.Fragment>

        <BrowserRouter>
          <div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/yoottana-nap" component={Home} />
              <Route path="/About" component={About} />
              <Route path="/Portfolio" component={Portfolio} />
              <Route path="/Contact" component={Contact} />
            </Switch>
          </div>
        </BrowserRouter>
       
      </React.Fragment>
    );
  }
}
export default App;

