import React, { Component } from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import CatShow from './CatShow'
import cat from '../mockCats.js'

Enzyme.configure({  adapter: new Adapter()  })

describe("When the CatShow loads...", () => {
  it("displays an h2 wrapper in the body", () => {
    const renderedApp = shallow(<CatShow cat={cat} />);
    const renderedCatShow = renderedApp.find("h2");
    expect(renderedCatShow.length).toEqual(1);
  });
  it("displays CatShow in the h2 wrapper", () => {
    const renderedApp = shallow(<CatShow cat={cat}/>);
    const renderedCatShow = renderedApp.find("h2").text();
    expect(renderedCatShow).toEqual("Hello my name is");
  });
});
