import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from 'reactstrap'

class CatNew extends Component{
  constructor(props){
    super(props)
    this.state ={
      newCat:{
        name: "",
        age: "",
        enjoys: "",
        image: ""
      },
      submitted: false
    }
  }

 handleChange = (e) => {
  let { newCat } = this.state
  newCat[e.target.name] = e.target.value
  this.setState({newCat: newCat})
 }

 handleSubmit = () => {
   this.props.createCat(this.state.newCat)
   this.setState({ submitted: true })
 }

  render(){

    return(
    <>
      <h1 style={{ color: '#FF0000' }}> My Profile </h1>
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
            value={this.state.newCat.name}
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
            value={this.state.newCat.age}
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
            value={this.state.newCat.enjoys}
          />
        </FormGroup>
        <FormGroup>
          <Label for="image">
            Cat Profile Picture
          </Label>
          <Input
            name="image"
            type="url"
            onChange={this.handleChange}
            value={this.state.newCat.image}
          />
        </FormGroup>
        <Button onClick={this.handleSubmit} name='Submit'>Add a New Cat</Button>
      </Form>
      {this.state.submitted && <Redirect to='/catIndex'/>}
    </>
      )
  }
}
export default CatNew;
