import React from 'react';
import { Table, PageHeader } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Route, Link } from 'react-router-dom'

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

const Level = ({ match }) => (
  <div>
    <Link to="/levels"><h4>Levels Index</h4></Link>
    <p>{levels[match.params.gaugenum-1].name} River</p>
    <p>
      Reading: {levels[match.params.gaugenum-1].level}m at {levels[match.params.gaugenum-1].date}
    </p>
  </div>
  )

const LevelRoutes = ({ match }) => (
  <div>
    <Route path={`${match.path}/:gaugenum`} component={Level}/>
    <Route exact path={match.path} render={() => (
      <LevelIndex/>
    )}/>
  </div>
  )

class LevelIndex extends React.Component{
  render() {
    return (
      <div>
        <PageHeader>
          River Levels
        </PageHeader>
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

export default LevelRoutes;