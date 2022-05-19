import { withRouter } from "react-router-dom";
import React, { useState } from "react";

function WalletConnect(props) {
  
    const btnhandler = () => {
        if (window.ethereum) {
        window.ethereum
            .request({ method: "eth_requestAccounts" })
            .then((res) => accountChangeHandler(res[0]));
        } else {
        alert("install metamask extension!!");
        }
    };
    
    
    const accountChangeHandler = (account) => {
        props.setWalletAddress(account);
        const dc =  "0xAB4cD162D38aA2ecE963EDa06A096526b5A71825";
        if(account===dc){
        props.history.push('/patient');}
        else{
        props.history.push('/Registration');}
     
    };



  return (
    <div> 
      <button onClick={btnhandler} style={{ margin: "0", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)"}}>
			Connect to wallet
		</button>

	</div>
  )
}

export default withRouter(WalletConnect);



