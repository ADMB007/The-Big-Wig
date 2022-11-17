import { Link, Route, Routes } from 'react-router-dom'
import './ExamplePortfolio.css'
import Header from '../components/Header'
import Text from '../components/Text'
import img1 from './img/pic1.jpg'
import img2 from './img/pic2.jpg'
import img3 from './img/pic3.jpg'
import img4 from './img/pic4.jpg'
import { Button } from '../components/Button'

export const ExamplePortfolio = () => {
    return (
        <div className='container' id='port'>
            <Header text={'User123\'s Portfolio:'} />
            <Text 
                text={'A Brief Description of User123'}
            />
            <Button text={'Edit Portfolio'} />
            <div className='images'>
                <div className='block'>
                    <img src={img1} alt='something'/>
                </div>
                <div className='block'>
                    <img src={img2} alt='something'/>
                </div>
                <div className='block'>
                    <img src={img3} alt='something'/>
                </div>
                <div className='block'>
                    <img src={img4} alt='something'/>
                </div>
            </div>
            
        </div>
    ) 
}