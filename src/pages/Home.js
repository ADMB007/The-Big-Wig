import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import { Login } from './Login'
import { ExamplePortfolio } from './ExamplePortfolio'
import Second from '../components/Second';

export const Home = () => {
    return (
        <div className='container'>
            <div className="App">
                <Second/>
            </div>
            <Routes>
                <Route path='/Login' element={<Login />}></Route>
                <Route path='/ExamplePortfolio' element={<ExamplePortfolio />}></Route>
            </Routes>
            
        </div>
    ) 
}