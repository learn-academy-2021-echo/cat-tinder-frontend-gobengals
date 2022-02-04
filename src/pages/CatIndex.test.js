import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import CatIndex from './CatIndex'
import cats from '../mockCats.js'

Enzyme.configure({adapter: new Adapter()})

describe("When the CatIndex loads...", () => {
  it("displays an h3 wrapper in the body", () => {
    const renderedApp = shallow(<CatIndex cats={cats} />);
    const renderedCatIndex = renderedApp.find("h3");
    expect(renderedCatIndex.length).toEqual(1);
  });
  it("displays CatIndex in the h3 wrapper", () => {
    const renderedApp = shallow(<CatIndex cats={cats}/>);
    const renderedCatIndex = renderedApp.find("h3").text();
    expect(renderedCatIndex).toEqual("CatIndex");
  });
});
