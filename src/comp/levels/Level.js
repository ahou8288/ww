import React from 'react';
import { Line } from 'react-chartjs-2';
import { Link } from 'react-router-dom';
const levels = [
  {name:"Bielsdown",link:1,date:"2:00pm",level:"0.76",},
  {name:"Gwydir",link:2,date:"5:30pm",level:"1.67",},
  {name:"Barrington",link:3,date:"1:00pm",level:"0.59",},
  {name:"Glouceter",link:4,date:"5:20pm",level:"2.30",}
  ];
const data = {
  labels: ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'],
  datasets: [
    {

      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      pointBorderColor: 'rgba(75,192,192,1)',
      label: 'Level Readings',
      data: [65, 59, 80, 81, 56, 55]
    }
  ]
};
const Level = ({ match }) => (
  <div>
    <Link to="/levels"><h4>Levels Index</h4></Link>
    <p>{levels[match.params.gaugenum-1].name} River</p>
    <p>
        <Line data={data} height={100} />
    </p>
    <p>
      Reading: {levels[match.params.gaugenum-1].level}m at {levels[match.params.gaugenum-1].date}
    </p>
  </div>
  )

export default Level