import React, { useEffect } from 'react';
// import '../../node_modules/react-grid-layout/css/styles.css';
// import '../../node_modules/react-resizable/css/styles.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/styles/base.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import Home from './Screens/Home/Home';
import Siderbar from './Sidebar/Sidebar';
import { VscGraph } from 'react-icons/vsc';
import Transaction from './Screens/Transaction/Transaction';

const App = () => {
  return (
    <div className="App">
      <div className="logo">
        <VscGraph />
        .Binder
      </div>
      <div className="main-container">
        <BrowserRouter>
          <Siderbar />
          <Switch>
          <Route path="/" exact component={Home} />
            <Route path="/add" exact component={Transaction} />
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
