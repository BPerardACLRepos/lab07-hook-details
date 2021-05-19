import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import RickAndMorty from '../../containers/RickAndMorty';
import Details from '../../containers/Details';

export default function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <RickAndMorty />
          </Route>
          <Route path="/:id">
            <Details />
          </Route>
        </Switch>
      </Router>
    </>
  )
}
