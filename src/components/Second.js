import React from 'react'
import '../styles/Second.css'
import profileicon from '../assets/profileicon.png'
import calendar from '../assets/calendar.png'
import tutoricon from '../assets/tutoricon.jpg'
import { Button } from './Button'
import Text from './Text'
import { Link } from 'react-router-dom'


const Second = () => {
  return (
    <section className='second-section'>
        <div className="second-container">
            <div className="card">
                <div className='card-item'>
                    <img src={profileicon} alt="" />
                </div>
                <div className='card-item'>
                    <Button text={'Login'} link='/Login' />
                </div>
                <div className='card-item'>
                    <h1>or</h1>
                </div>
                <div className='card-item'>
                    <Button text={'Sign Up'} link='/Signup' />
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