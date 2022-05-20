import React from 'react'

const Button = ({color, text, onClick}) => {
    return <button 
        onClick={onClick} 
        style={{backgroundColor : color}} 
        className='self-end px-5 py-2 ml-3 mt-3 rounded-lg text-white md:mt-0'>{text}
    </button>
}

export default Button