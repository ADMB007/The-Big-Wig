
import { Button } from '../components/Button'
import Header from '../components/HeaderApp'
import Text from '../components/Text'
import './Login.css'

export const Login = () => {
    // username and password authentication here

    return (
        <div className='container'>            
            <form>
                <Header text={'Login'} />
                <Text text={'Please enter your Email and Password'} />
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
            </form>
        </div>
    )
}
