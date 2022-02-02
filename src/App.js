import React, { Component } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import CatIndex from './pages/CatIndex'
import CatShow from './pages/CatShow'
import CatNew from './pages/CatNew'
import CatEdit from './pages/CatEdit'
import NotFound from './pages/NotFound'




class App extends Component{
 render(){
  return(
   <>
    <Header/>
    <h1>Hello</h1>
    < Home />
    <CatIndex />
    <CatShow />
    <CatNew />
    <CatEdit />
    <NotFound />
    <Footer/>
   </>
)}
}
export default App;
