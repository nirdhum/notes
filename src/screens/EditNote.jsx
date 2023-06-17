// import React from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { IoIosArrowBack } from 'react-icons/io'
import { MdOutlineDeleteOutline } from 'react-icons/md'
import { useState } from 'react'
import createDate from '../components/createDate'

const EditNote = ({ notes, setNotes }) => {

    const { id } = useParams()
    const note = notes.find((item) => item.id == id)
    const [title, setTitle] = useState(note.title)
    const [details, setDetails] = useState(note.details)
    const date = createDate()
    const navigate = useNavigate()

    const handleChange = (e) => {
        e.preventDefault()

        if (title && details) {
            const updatedNote = { ...note, title, details, date }

            const updatedNotes = notes.map(item => {
                if (item.id == id) {
                    item = updatedNote
                }
                return item
            })

            setNotes(updatedNotes)
        }
        navigate('/notes')
    }

    const deleteNote = () => {
        if (window.confirm('Do you really want to delete?')) {
            const newNotes = notes.filter(item => item.id != id)

            setNotes(newNotes)

            navigate('/notes')
        }
    }

    return (
        <section>
            <header className='create-note__header'>
                <Link to='/notes' className='btn'><IoIosArrowBack /></Link>
                <button className="btn lg primary" onClick={handleChange}>Save</button>
                <button className="btn danger" onClick={deleteNote} ><MdOutlineDeleteOutline /></button>
            </header>
            <form action="" className="create-note__form">
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Title for your Note' autoFocus />
                <textarea rows="30" value={details} onChange={(e) => setDetails(e.target.value)} placeholder='Write your Note here...'></textarea>
            </form>
        </section>
    )
}

export default EditNote