// import React from 'react'
import { Link } from 'react-router-dom'
import { IoIosArrowBack } from 'react-icons/io'
import { MdOutlineDeleteOutline } from 'react-icons/md'

const EditNote = () => {
    return (
        <section>
            <header className='create-note__header'>
                <Link to='/' className='btn'><IoIosArrowBack /></Link>
                <button className="btn lg primary">Save</button>
                <button className="btn danger"><MdOutlineDeleteOutline /></button>
            </header>
            <form action="" className="create-note__form">
                <input type="text" name="" id="" placeholder='Title for your Note' autoFocus />
                <textarea rows="30" placeholder='Write your Note here...'></textarea>
            </form>
        </section>
    )
}

export default EditNote