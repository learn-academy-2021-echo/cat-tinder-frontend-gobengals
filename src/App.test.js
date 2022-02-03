import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import App from './App'
import Home from './pages/Home'

Enzyme.configure({  adapter: new Adapter()  })

describe("When my app renders",   ()=>{
	it("displays a header and a footer",   ()=>{
		//arrange
		const renderedApp = shallow(<App/>)
		//Act
		const renderedHeader = renderedApp.find("Header")
		const renderedFooter = renderedApp.find("Footer")

		// assert
		expect(renderedHeader.length).toEqual(1)
		expect(renderedFooter.length).toEqual(1)
	})
})
