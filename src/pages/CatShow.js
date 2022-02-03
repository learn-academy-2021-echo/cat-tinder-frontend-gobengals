import React, { Component } from 'react'


class Show extends Component{
  render(){
    const { cat } = this.props
    return(
      <>
       <h1>Show me cats</h1>
       <h3>{cat.name}</h3>
       <p>{cat.age}</p>
       <p>{cat.enjoys}</p>
       <img src={cat.image} alt="awesome cat pic" width=" 300px"/>
      </>
    )
  }
}
export default Show;
