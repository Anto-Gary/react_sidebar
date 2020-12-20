import React, {useContext, useState} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Reports from './pages/Reports';
import Products from './pages/Products';
import Test from './pages/Test';


import SidebarContextProvider from './contexts/SidebarContext'

function App() {
  return (
    <>
      <Router>
      <SidebarContextProvider>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/reports' component={Reports} />
          <Route path='/products' component={Products} />
          <Route path='/test' component={Test} />
        </Switch>
        </SidebarContextProvider>
      </Router>
    </>
  );
}



export default App;
