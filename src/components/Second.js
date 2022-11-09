import React from 'react'
import '../styles/Second.css'
import profileicon from '../assets/profileicon.png'
import calendar from '../assets/calendar.png'
import tutoricon from '../assets/tutoricon.jpg'
import download2 from '../assets/download2.png'


const Second = () => {
  return (
    <section className='second-section'>
        <div className="second-container">




        <div className="card">
            <img src={profileicon} alt=""/>
            <button>Profile</button>

        </div>

        <div className="card">
            <img src={calendar} alt=""/>
            <button>Events</button>
        </div>

        <div className="card">
            <img src={tutoricon} alt=""/>
            <button>Tutorials</button>
        </div>

        <div className="card">
            <img src={download2} alt=""/>
            <button>Upload/Download</button>

        </div>  
       

        </div>
       


    </section>

   
    )
  }



export default Second