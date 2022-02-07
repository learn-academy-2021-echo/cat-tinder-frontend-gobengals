import React, { Component } from 'react'
import {
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap'

class CatNew extends Component{
  constructor(props){
    super(props)
    this.state ={
      newCat:{
        name: "",
        age: "",
        enjoys: "",
        img: ""
      }
    }
  }
 handleChange = (e) => {
  let { newCat } = this.state
  newCat[e.target.name] = e.target.value
  this.setState({ newCat: newCat })
 }
  render(){
    console.log(this.state.newCat);
    return(
    <>
      <h1> New cats</h1>
      <Form>
        <FormGroup>
          <Label for="name">
            Cat Name
          </Label>
          <Input
            name="name"
            placeholder="What is your name"
            type="text"
            onChange={this.handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="age">
            Cat Age
          </Label>
          <Input
            name="age"
            placeholder="What is your age?"
            type="number"
            onChange={this.handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="enjoys">
            Your favorite hobbies
          </Label>
          <Input
            name="enjoys"
            placeholder="What are your favorite hobbies?"
            type="text"
            onChange={this.handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="img">
            Cat Profile Picture
          </Label>
          <Input
            name="img"
            type="url"
            onChange={this.handleChange}
          />
        </FormGroup>
      </Form>
    </>
      )
  }
}
export default CatNew;
