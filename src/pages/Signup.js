import { Link } from 'react-router-dom'
import { Button } from '../components/Button'
import './Login.css'

export const Signup = () => {
    // username and password authentication here

    return (
        <div className='back' id='centered'>            
            <form id='centered'>
                <div id='centered'>
                    <h1>Sign up</h1>
                </div>
                <div id='centered'>
                    <b>Please enter your Email and Password</b>
                </div>
                <div position='absolute'>
                    <i className="fa-solid fa-user"/>
                    <input
                        type='email'
                        placeholder='Email'
                    />
                </div>

                <div position='relative'>
                    <i className="fa-solid fa-lock"/>
                    <input
                        type='password'
                        placeholder='Password'
                    />
                </div>
                <Button text={'Submit'} link='/ExamplePortfolio' />
                <Link to='/Login'>Already have an account? Click here</Link>
            </form>
        </div>
    )
}
