import React, { Component } from 'react'


class catShow extends Component{
  render(){
    const { cat } = this.props
    return(
      <>
      <center>
      <h2>Hello my name is</h2>

       <p>{cat.name}</p>
       <p>{cat.age} years old</p>
       <p>Likes to {cat.enjoys}</p>
       <img src={cat.image} alt="awesome cat pic" width=" 300px"/>
      </center>
      </>
    )
  }
}
export default catShow;
