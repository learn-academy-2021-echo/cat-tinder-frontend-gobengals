import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Index extends Component{
  render(){
    return(
      <>
       <h1>CatIndex</h1>
        {this.props.cats.map(cat =>{
         return(
          <NavLink to={'/catshow/${cat.id}'} key={cat.id}>
          <p>{cat.name}</p>
          </NavLink>
         )
        })}
      </>
    )
  }
}

export default Index;
