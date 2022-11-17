import React from 'react'
import '../styles/Second.css'
import profileicon from '../assets/profileicon.png'
import calendar from '../assets/calendar.png'
import tutoricon from '../assets/tutoricon.jpg'
import download2 from '../assets/download2.png'
import { Button } from './Button'
import { Link } from 'react-router-dom'


const Second = () => {
  return (
    <section className='second-section'>
        <div className="second-container">
            <div className="card">
                <div className='card-item'>
                    <img src={profileicon} alt="">
                    </img>
                </div>
                <div className='card-item'>
                    <Button text={'Login'} link='/Login' />
                </div>
            </div>

            <div className="card">
                <div className='card-item'>
                    <img src={calendar} alt=""/>
                </div>
                <div className='card-item'>
                    <Button text={'Events'} link='/' />
                </div>
            </div>

            <div className="card">
                <div className='card-item'>
                        <img src={tutoricon} alt=""/>
                    </div>
                    <div className='card-item'>
                        <Button text={'Tutorials'} link='/' />
                    </div>
            </div>
        </div>
       


    </section>

   
    )
  }



export default Second