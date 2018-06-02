import React from 'react';
import { Link } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';


const levels = [
  {name:"Bielsdown",link:1,date:"2:00pm",level:"0.76",},
  {name:"Gwydir",link:2,date:"5:30pm",level:"1.67",},
  {name:"Barrington",link:3,date:"1:00pm",level:"0.59",},
  {name:"Glouceter",link:4,date:"5:20pm",level:"2.30",}
  ];
  
const data = [{level:1.50,  name:' 4.00am Tue 25/06/13'},
{level:1.52,  name:' 5.00am Tue 25/06/13'},
{level:1.56,  name:' 6.00am Tue 25/06/13'},
{level:1.61,  name:' 7.00am Tue 25/06/13'},
{level:1.70,  name:' 8.00am Tue 25/06/13'},
{level:1.82,  name:' 9.00am Tue 25/06/13'},
{level:1.96,  name:'10.00am Tue 25/06/13'},
{level:2.08,  name:'11.00am Tue 25/06/13'},
{level:2.15,  name:'12.00pm Tue 25/06/13'},
{level:2.17,  name:' 1.00pm Tue 25/06/13'},
{level:2.13,  name:' 2.00pm Tue 25/06/13'},
{level:2.04,  name:' 3.00pm Tue 25/06/13'},
{level:1.93,  name:' 4.00pm Tue 25/06/13'},
{level:1.84,  name:' 5.00pm Tue 25/06/13'},
{level:1.78,  name:' 6.00pm Tue 25/06/13'},
{level:1.75,  name:' 7.00pm Tue 25/06/13'},
{level:1.74,  name:' 8.00pm Tue 25/06/13'},
{level:1.74,  name:' 9.00pm Tue 25/06/13'},
{level:1.75,  name:'10.00pm Tue 25/06/13'},
{level:1.78,  name:'11.00pm Tue 25/06/13'},
{level:1.83,  name:'12.00am Wed 26/06/13'},
{level:1.86,  name:' 1.00am Wed 26/06/13'},
{level:1.88,  name:' 2.00am Wed 26/06/13'},
{level:1.89,  name:' 3.00am Wed 26/06/13'},
{level:1.88,  name:' 4.00am Wed 26/06/13'},
{level:1.84,  name:' 5.00am Wed 26/06/13'},
{level:1.81,  name:' 6.00am Wed 26/06/13'},
{level:1.79,  name:' 7.00am Wed 26/06/13'},
{level:1.78,  name:' 8.00am Wed 26/06/13'},
{level:1.76,  name:' 9.00am Wed 26/06/13'},
{level:1.73,  name:'10.00am Wed 26/06/13'},
{level:1.69,  name:'11.00am Wed 26/06/13'},
{level:1.64,  name:'12.00pm Wed 26/06/13'},
{level:1.59,  name:' 1.00pm Wed 26/06/13'},
{level:1.54,  name:' 2.00pm Wed 26/06/13'},
{level:1.51,  name:' 3.00pm Wed 26/06/13'},
{level:1.48,  name:' 4.00pm Wed 26/06/13'},
{level:1.46,  name:' 5.00pm Wed 26/06/13'},
{level:1.44,  name:' 6.00pm Wed 26/06/13'},
{level:1.41,  name:' 7.00pm Wed 26/06/13'},
{level:1.38,  name:' 8.00pm Wed 26/06/13'},
{level:1.36,  name:' 9.00pm Wed 26/06/13'},
{level:1.33,  name:'10.00pm Wed 26/06/13'},
{level:1.30,  name:'11.00pm Wed 26/06/13'},
{level:1.27,  name:'12.00am Thu 27/06/13'},
{level:1.24,  name:' 1.00am Thu 27/06/13'},
{level:1.21,  name:' 2.00am Thu 27/06/13'},
{level:1.19,  name:' 3.00am Thu 27/06/13'},
{level:1.17,  name:' 4.00am Thu 27/06/13'},
{level:1.14,  name:' 5.00am Thu 27/06/13'},
{level:1.12,  name:' 6.00am Thu 27/06/13'},
{level:1.10,  name:' 7.00am Thu 27/06/13'},
{level:1.08,  name:' 8.00am Thu 27/06/13'},
{level:1.06,  name:' 9.00am Thu 27/06/13'},
{level:1.05,  name:'10.00am Thu 27/06/13'},
{level:1.03,  name:'11.00am Thu 27/06/13'}]

const Level = ({ match }) => (
  <div>
    <Link to="/levels"><h4>Levels Index</h4></Link>
    <p>{levels[match.params.gaugenum-1].name} River</p>
    <p>
      <LineChart width={400} height={400} data={data}>
        <YAxis/>
        <CartesianGrid strokeDasharray="3 3"/>
        <Tooltip/>
        <Legend />
        <XAxis dataKey="name"/>
        <Line type="monotone" dataKey="level" stroke="#8884d8" />
      </LineChart>
    </p>
    <p>
      Reading: {levels[match.params.gaugenum-1].level}m at {levels[match.params.gaugenum-1].date}
    </p>
  </div>
  )

export default Level