// import React from 'react'
import { Link } from 'react-router-dom'
import { IoIosArrowBack } from 'react-icons/io'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import createDate from '../components/createDate';

const CreateNote = () => {

    const [title, setTitle] = useState('')
    const [details, setDetails] = useState('')
    const date = createDate()

    const handleSubmit = (e) => {
        e.preventDefault()

        if (title && details) {
            const note = { id: uuidv4(), title, details, date }
            console.log(note);
        }

    }

    return (
        <section>
            <header className='create-note__header'>
                <Link to='/' className='btn'><IoIosArrowBack /></Link>
                <button className="btn lg primary" onClick={handleSubmit}>Save</button>
            </header>
            <form className="create-note__form" onSubmit={handleSubmit}>
                <input type="text" name="" id="" placeholder='Title for your Note' value={title} onChange={(e) => setTitle(e.target.value)} autoFocus />
                <textarea rows="30" placeholder='Write your Note here...' value={details} onChange={(e) => setDetails(e.target.value)}></textarea>
            </form>
        </section>
    )
}

export default CreateNote