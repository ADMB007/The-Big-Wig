import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import { Login } from './Login'
import { ExamplePortfolio } from './ExamplePortfolio'
import HeaderApp from '../components/HeaderApp';
import Second from '../components/Second';
import Section from '../components/Section';
import Header from '../components/Header';

export const Home = () => {
    return (
        <div className='container'>
            <div className="App">
                <HeaderApp/>
                <Section/>
                <Second/>
            </div>
            <Routes>
                <Route path='/Login' element={<Login />}></Route>
                <Route path='/ExamplePortfolio' element={<ExamplePortfolio />}></Route>
            </Routes>
            
        </div>
    ) 
}