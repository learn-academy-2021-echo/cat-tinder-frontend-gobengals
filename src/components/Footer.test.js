import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Footer from './Footer'

Enzyme.configure({adapter: new Adapter()})

describe("When Footer renders", () => {
  it("displays the home page", () => {
    const home = shallow(<Footer />)
    const homePage = home.find("h1").text()
    expect(homePage).toEqual("Cat Footer")
  })
})
