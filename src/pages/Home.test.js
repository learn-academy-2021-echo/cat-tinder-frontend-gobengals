import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Home from './Home'

Enzyme.configure({adapter: new Adapter()})

describe("When Home renders", () => {
  it("displays the home page", () => {
    const home = shallow(<Home />)
    const homePage = home.find("h1").text()
    expect(homePage).toEqual("Hello Home")
  })
})
