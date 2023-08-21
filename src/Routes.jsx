import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './components/pages/Home/Home'
import { ProjectOne } from './components/pages/project-1';
import { ProjectTwo } from './components/pages/project-2';
import { ProjectThree } from './components/pages/project-3';

export default function Rotas (){
  return (
    <Routes>
      <Route path='/' Component={Home}/>
      <Route path='/project-1' Component={ProjectOne}/>
      <Route path='/project-2' Component={ProjectTwo}/>
      <Route path='/project-3' Component={ProjectThree}/>
    </Routes>
  );
}