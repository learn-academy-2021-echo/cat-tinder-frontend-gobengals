# Getting Started with Create React App
$ yarn create react-app cat-tinder-frontend
$ cd cat-tinder-frontend
$ git remote add origin https://github.com/learn-academy-2021-echo/cat-tinder-frontend-gobengals.git
- Check if app is working in my code editor.
$ git chekout -b main
$ git add .
$ git commit -m ""
$ git push origin main
$ yarn start
$ git checkout -b frontend-structure
## Creating Basic code for the class components
 class App extends Component{
   render(){
     return(

       )
   }
 }

 added each component call in the return
 export defaul App

 $ yarn add bootstrap
$ yarn add reactstrap

in app.js:
constructor(props){
    super(props)
    this.state = {
      cats: mockCats
    }
  }

in index.js: 'import 'bootstrap/dist/css/bootstrap.min.css';

 $ yarn add react-router-dom@5.3.0

 in app.js:

 import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

in App.test.js:

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

-test checking if header and footer are presnet in app.js passed.


crated Home.test.js:

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

-test checking that the correct text is displayed in Home.js passed

created file Header.test.js:

import React, { Component } from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Header from './Header'

Enzyme.configure({  adapter: new Adapter()  })

describe("When Header renders", () => {
  it("displays the Header", () => {
    const header = shallow(<Header />)
    const navLinkCount = header.find("NavLink")
    expect(navLinkCount.length).toEqual(2)
  })
})

- test to check the number of navLinks = 2 passed

created file Footer.test.js:
-test to check if the footer text = "Cat Footer" passed

created file NotFound.test.js:
-test to check if the Not Found.js page displays the correct error message passed
