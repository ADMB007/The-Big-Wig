import React, {useState} from 'react'
import '../styles/HeaderApp.css'
import { Data } from './Data'


const HeaderApp = () => {

    const[open,setOpen] = useState(false)

    const showMenu = ()=>{
        setOpen(!open)
    }


  return (
    <div className='header'>
        <div className="header-container">



        <div className="logo"></div>
            <h1>The Big Wig</h1>
        </div>

        <div className="number">
            <span></span>
            <p></p>
        





        </div>

        <nav className={open ?'slider active' : 'slider'}>
            <ul onClick={showMenu}>
                {Data.map((item,index) => {
                    return (
                        <li key={index}>
                                <a href={item.path}>{item.text}</a>
                        </li>

                   
                    
            
                    )
                })}
                    
            </ul>
        </nav>






    </div>
  )
}

export default HeaderApp