import { useState } from "react"

const AddComment = ({ onAdd }) => {
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [body, setComment] = useState('')

    // Some Validation upon submit
    const onSubmit = (e) => {
        e.preventDefault()

        if(!email) {
            alert('Please enter a valid Email.')
            return
        }

        if(!name) {
            alert('Please enter a valid Name.')
            return
        }

        if(!body) {
            alert('Please add a valid Comment.')
            return
        }

        onAdd({ email, name, body})
        alert('Comment Added.')

        setEmail('')
        setName('')
        setComment('')
    }

    return (
        <div className="container bg-gray-100 mt-5 p-5 rounded-lg shadow-lg">
            <form className='grid grid-row-3 gap-4 content-center w-full' onSubmit={onSubmit}>
                <div className='row-span-1'>
                    <input 
                        type='email' 
                        placeholder='Email' 
                        value={email} 
                        onChange={(e)=>setEmail(e.target.value)} 
                        className="w-full shadow px-3 py-1"
                    />
                </div>
                <div className='row-span-1'>
                    <input 
                        type='text' 
                        placeholder='Name' 
                        value={name} 
                        onChange={(e)=>setName(e.target.value)}
                        className="w-full shadow px-3 py-1"
                    />
                </div>
                <div className='row-span-1'>
                    <input 
                        type='text' 
                        placeholder='Comment' 
                        value={body} 
                        onChange={(e)=>setComment(e.target.value)}
                        className="w-full shadow px-3 py-1"
                    />
                </div>
                <input className='p-3 bg-Blue mx-auto md:w-1/5 rounded-md' type='submit' value='Comment' />
            </form>
        </div>
    )
}

export default AddComment