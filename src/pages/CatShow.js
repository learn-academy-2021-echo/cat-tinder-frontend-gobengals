import React, { Component } from 'react'


class catShow extends Component{
  render(){
    const { cat } = this.props
    return(
      <>
      <h2>Hello my name is</h2>

       <p>{cat.name}</p>
       <p>{cat.age}</p>
       <p>{cat.enjoys}</p>
       <img src={cat.image} alt="awesome cat pic" width=" 300px"/>
      </>
    )
  }
}
export default catShow;
