import React from 'react'
import {Link} from 'react-router-dom'

const levels = [{name:"Bielsdown",link:1,},{name:"Gwydir",link:2,},{name:"Barrington",link:3,},{name:"Glouceter",link:4,}]
const levelItems = levels.map((d) =>
  <li>
    <Link to={"/levels/"+d.link}>{d.name}</Link>
  </li>
);

class LevelIndex extends React.Component{
  render() {
    return (
      <div>
        <form>
          Grade filter:<br/>
          <input type="checkbox" name="grade" value="1"/>1<br/>
          <input type="checkbox" name="grade" value="2"/>2<br/>
          <input type="checkbox" name="grade" value="3"/>3
        </form>

        <br/>
        Gauge List;
        <ul>
          {levelItems}
        </ul>
      </div>
    )
  }
}

export default LevelIndex;