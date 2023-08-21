import React from 'react'
import folder from '../assets/folder.svg'
import './Home.css'
import { Link } from 'react-router-dom';
export default function Home() {
  return (
    <div className='container'>
       <h1>Home</h1>
       <div className='folders'>
          <div className='item'>
            <img src={folder} alt="" />
            <br />
            <Link to="/Project-1">Project 1</Link>
          </div>
          <div className='item'>
            <img src={folder} alt="" />
            <br />
            <Link to="/Project-2">Project 2</Link>
          </div>
          <div className='item'>
            <img src={folder} alt="" />
            <br />
            <Link to="/Project-3">Project 3</Link>
          </div>
       </div>
    </div>
  )
}

