import React, { Fragment ,useEffect,useState} from 'react';
import { Switch } from 'react-router-dom';
import './../App.css';
import History from "../components/constant/History"

// Import Layouts
import Navbar from './../layouts/Navbar';
import Sidebar from './../layouts/Sidebar';
// End of Import Layouts

// Import Body Component

import Body from './body/Body';

// End of Body Component

function App() {
  useEffect(() => { console.log(History.location) })
  
 
  return (
    <div class="inner-wrapper">
      <Navbar />
      <div class="page-wrapper">
        <div class="container-fluid">
          <div class="row">
            <div class="sider col-xl-3 col-lg-4 col-md-12 theiaStickySidebar">
              <Sidebar />
            </div>

            <div class="col-xl-9 col-lg-8 col-md-12">
              <Switch>
                <Body />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </div>






  );
}

export default App;
