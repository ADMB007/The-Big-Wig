import { Link } from 'react-router-dom'

export const Button = ({text, link}) => {
    const onClick = () => {
        console.log('click')
    }

    const upload = () => {
        console.log('upload')
    }

    return (
        <div className='btnContainer'>
            <Link to={link}>
            <button
                onClick={onClick}
                className='btn'
            >
            {text}
            </button>
            </Link>
        </div>
    
  )
}

