import React from 'react';
import { Route, Switch, Link} from 'react-router-dom'
import LandingRoute from '../routes/LandingRoute/LandingRoute'
import './App.css';
import AdoptionRoute from '../routes/AdoptionRoute/AdoptionRoute'
import AdoptionLinePage from '../components/AdoptionLinePage/AdoptionLinePage'


function App() {
  return (
    <div className="App">
      <nav>
        <Link to='/'>
          <h1>
            Petful
        </h1>
        </Link>
      </nav>
      <main>
        <Switch>
          <Route
            exact
            path={'/'}
            component={LandingRoute}
          />
          <Route
            exact
            path={'/adopt'}
            component={AdoptionRoute}
          />
          <Route
            exact
            path={'/adoptionline'}
            component={AdoptionLinePage}
          />
        </Switch>
      </main>
    </div >
  );
}

export default App;
