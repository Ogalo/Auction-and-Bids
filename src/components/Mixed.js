import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./Main";
import SignUp from './SignUp';
import Bid from './BidPlacement'
import Home from './Home';
import Sell from './Sell';


function Mixed() {
  return (
    <Router>
    <Routes>
    <Route exact path="/" element={<Home />}></Route>
    <Route exact path="/main" element={<Main />}></Route>
    <Route exact path="/Auction" element={<Sell />}></Route>
    <Route exact path="/SignUp" element={<SignUp />}></Route>
    <Route exact path="/Bid" element={<Bid />}></Route>



    </Routes>

    </Router>

  );
}

export default Mixed;
