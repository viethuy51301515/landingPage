import React,{useEffect} from 'react';
import {useDispatch} from 'react-redux';
import logo from './logo.svg';
import './App.css';
import Layout from './components/layout';
import SylabusDetail from './components/sylabusDetail';
import {BrowserRouter,Route} from 'react-router-dom';
import EventList from './components/event'


function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Route exact path='/' component={Layout}></Route>
        <Route path='/detail/:id' component={SylabusDetail}/>
        <Route path='/event' component={EventList}/>
        </BrowserRouter>
    </div>
  );
}

export default App;
