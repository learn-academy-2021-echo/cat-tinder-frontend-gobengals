import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import NotFound from './NotFound'

Enzyme.configure({adapter: new Adapter()})

describe("When NotFound renders", () => {
  it("displays the text for NotFound", () => {
    const notFound = shallow(<NotFound />)
    const errorPage = notFound.find("h1").text()
    expect(errorPage).toEqual("Hello NotFound")
  })
})
