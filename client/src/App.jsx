// import React from 'react'
// import Admin from './components/Admin'
// import FindLawyer from './components/FindLawyer'
// import Dashboard from './components/Dashboard'
// import Link from '@mui/material/Link'

// const App = () => {
//   return (
//     <div>
//       {/* <Admin/> */}
//       <FindLawyer/>
//     </div>
//   )
// }

import React from 'react';
import Admin from './components/Admin';
import FindLawyer from './components/FindLawyer';
import Dashboard from './components/Dashboard';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/findlawyer" element={ <FindLawyer /> } />
        <Route path="/dashboard" element={ <Dashboard /> } />
      </Routes>
    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

export default App
