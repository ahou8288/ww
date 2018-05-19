import React from 'react';
const guideContent = {
  'thredbo-village-to-ngario':{
    river:'Thredbo River',
    name:'Afternoon Delight',
    grade:4},
  'copeton-dam-to-horse-stealers-creek':{
    river:'Gwydir River',
    name:'Copeton dam to horse stealers creek',
    grade:5},
  'canoe-creek-to-bob-turners-track':{
    river:'Colo River',
    name:'Canoe Creek to Bob Turners Track',
    grade:3},
}
const getContent = function(slug){
  if (slug in guideContent){
    return (
      <div>
        <div>{guideContent[slug].river}</div>
        <div>{guideContent[slug].name}</div>
        <div>{'Grade: '+guideContent[slug].grade}</div>
      </div>)
  }

  return slug;
}

const Guide = ({ match }) => (
  <div>
  <h3>{getContent(match.params.topicId)}</h3>
  </div>
)

export default Guide;