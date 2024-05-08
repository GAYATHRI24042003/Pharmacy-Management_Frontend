import React from 'react';
import {  Routes, Route, BrowserRouter } from 'react-router-dom';
import PHARM from './components/PHARM';
import Registration1 from './components/Registration1';
import Signin from './components/Sigin';
import Tablets from './components/Tablets';


function App() {
  return (
<BrowserRouter>
    <Routes>
        <Route path='/Tablets/:email' element={<Tablets/>}/>
        <Route path="/registration" element={<Registration1/>} />
        <Route path="/signin" element={<Signin/>} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
