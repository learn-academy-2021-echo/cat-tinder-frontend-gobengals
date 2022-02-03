import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import CatIndex from './CatIndex'

Enzyme.configure({adapter: new Adapter()})

describe("When CatIndex renders", () => {
  it("displays all cats", () => {
    const index = shallow(<CatIndex />)
    const allCats = index.find("cats.length")
    expect(homePage).toEqual("Hello CatIndex")
  })
})
