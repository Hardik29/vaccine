import React, { useState,useEffect } from "react";
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import WalletConnect from "./Commponents/WalletConnect";
import PatientDetials from "./Commponents/PatientDetials";
import Registration from "./Commponents/Registration";
import Slot from "./Commponents/Slot";
import { loadContract } from './utils/interact';
import "./App.css";

function App() {

const [address, setaddress] = useState(null);

const setWalletAddress = (account) =>{ 
      setaddress(account);
}

useEffect(() => {
  loadContract();
}, [])

return (
	<div>
    <Router>
      <Switch>
            <Route exact path='/'>
              <WalletConnect  setWalletAddress={setWalletAddress}/>
            </Route>
			<Route path='/patient'>
              <PatientDetials address={address} />
            </Route>
			<Route path='/Registration'>
              <Registration address={address} />
            </Route>
      <Route path='/Slot'>
              <Slot address={address} />
            </Route>
      </Switch>
    </Router>
    </div>
);
}

export default App;
