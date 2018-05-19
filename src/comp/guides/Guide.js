import React from 'react';

const Guide = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)

export default Guide;