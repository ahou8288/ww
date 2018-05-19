import React from 'react';
import {
  Route,
  Link
} from 'react-router-dom'

import Guide from './Guide'

const GuideIndex = ({ match }) => (
  <div>
    <h2>Guides</h2>

    <Route path={`${match.path}/:topicId`} component={Guide}/>
    <Route exact path={match.path} render={() => (
      <div>
        <h3>Select a section.</h3>
        <LinkList match = { match }/>
      </div>
    )}/>
  </div>
)

const LinkList = ({ match }) => (
  <div>
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
  </div>
)

export default GuideIndex;