// import React from 'react'
// import Enzyme, { shallow } from 'enzyme'
// import Adapter from 'enzyme-adapter-react-16'
// import CatNew from './CatNew'

Enzyme.configure({ adapter: new Adapter() })

describe("When CatNew Loads...", () => {
  it("it display an h2", () => {
    const catNewRender = shallow(<CatNew/>)
    const h2Wrapper = catNewRender.find("h2")
    expect(h2Wrapper.lenght).toEqual(1)
  })
  it("display a form for the user to fill out", ()=> {
    const catNewRender = shallow(<CatNew/>)
    const formWrapper = catNewRender.find("Form")
    expect(formWrapper.lenght).toEqual(1)
  })
})
