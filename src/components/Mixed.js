import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./Main";
import SignUp from './SignUp';
import Bid from './BidPlacement'


function Mixed() {
  return (
    <Router>
    <Routes>
    <Route exact path="/" element={<Main />}></Route>
    <Route exact path="/SignUp" element={<SignUp />}></Route>
    <Route exact path="/Bid" element={<Bid />}></Route>



    </Routes>

    </Router>

  );
}

export default Mixed;
