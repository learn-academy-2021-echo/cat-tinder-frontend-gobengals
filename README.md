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
