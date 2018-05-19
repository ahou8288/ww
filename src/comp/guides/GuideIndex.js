import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Guide from './Guide'

const Topics = ({ match }) => (
  <div>
    <h2>Guides</h2>
    <ul>
      <li>
        <Link to={`${match.url}/copeton-dam-to-horse-stealers-creek`}>
          Copeton dam to horse stealers creek
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/thredbo-village-to-ngario`}>
          Thredbo village to ngario
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/canoe-creek-to-bob-turners-track`}>
          Canoe creek to bob turners track
        </Link>
      </li>
    </ul>

    <Route path={`${match.path}/:topicId`} component={Guide}/>
    <Route exact path={match.path} render={() => (
      <h3>Select a section.</h3>
    )}/>
  </div>
)

export default Topics;