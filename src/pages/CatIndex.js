import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class CatIndex extends Component{
  render() {
    return(
<center>
      <>

      <h3> The Whole Gang </h3>
        {this.props.cats.map( (cat) => {
          return (
            <NavLink to={`/catshow/${cat.id}`} key={cat.id}>
            <p style={{ color: '#FF0000' }}>{cat.name}</p>
            </NavLink>

          )
        })
        }
      </>
      </center>
    )
  }
}

export default CatIndex;
