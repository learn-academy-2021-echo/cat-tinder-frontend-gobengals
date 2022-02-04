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
        enjoy: "",
        img: ""
      }
    }
  }
  render(){
    return(
    <>
      <h1> New cats</h1>
      <Form>
        <FormGroup>
          <Label for="name">
            Cat Name
          </Label>
          <Input
            name="email"
            placeholder="What is your name"
            type="text"
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
          />
        </FormGroup>
        <FormGroup>
          <Label for="enjoy">
            Your favorite hobbies
          </Label>
          <Input
            name="enjoy"
            placeholder="What is your favorite hobbies?"
            type="text"
          />
        </FormGroup>
        <FormGroup>
          <Label for="img">
            Cat Profile Picture
          </Label>
          <Input
            name="img"
            type="urk"
          />
        </FormGroup>
      </Form>
    </>
      )
  }
}
export default CatNew;
