import React from 'react'
import { BrowserRouter as Router} from "react-router-dom";
import Rotas from './Routes'

export default function App() {
  return (
    <Router>
      <Rotas />
    </Router>
  )
}

