import React from 'react';

import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from './Components/App';
import Fridge from './Components/Fridge';
import Recommended from './Components/Recommended';


render(

  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Fridge />}/>
        <Route path="fridge" element={<Fridge />} />
        <Route path="recipes" element={<Recommended />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

