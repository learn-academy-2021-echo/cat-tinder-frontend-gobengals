import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class CatIndex extends Component{
  render() {
    return(
      <>
      <h3>CatIndex</h3>
        {this.props.cats.map( (cat) => {
          return (
            <NavLink to={`/catshow/${cat.id}`} key={cat.id}>
            <p>{cat.name}</p>
            </NavLink>
          )
        })
        }
      </>
    )
  }
}

export default CatIndex;
