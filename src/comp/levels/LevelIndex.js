import React from 'react';
import {Table} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';


const levels = [
  {name:"Bielsdown",link:1,date:"2:00pm",level:"0.76",},
  {name:"Gwydir",link:2,date:"5:30pm",level:"1.67",},
  {name:"Barrington",link:3,date:"1:00pm",level:"0.59",},
  {name:"Glouceter",link:4,date:"5:20pm",level:"2.30",}
  ];

const headings = ["Name","Level (m)","Date"];

const tableHeadings = headings.map((d) =>
  <th>{d}</th>
);
const tableRows = levels.map((d) =>
  <LinkContainer to={"/levels/"+d.link}>
    <tr>
      <td>{d.name}</td>
      <td>{d.level}</td>
      <td>{d.date}</td>
    </tr>
  </LinkContainer>
);

class LevelIndex extends React.Component{
  render() {
    return (
      <div>
        <h1>River Levels</h1>
        <Table responsive>
          <thead>
            <tr>
              {tableHeadings}
            </tr>
          </thead>
          <tbody>
            {tableRows}
          </tbody>
        </Table>
      </div>
    )
  }
}

export default LevelIndex;