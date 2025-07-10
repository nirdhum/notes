// import React from 'react'
import { CiSearch } from 'react-icons/ci'
import { Link } from 'react-router-dom'
import { BsPlusLg } from 'react-icons/bs'
import { IoMdClose } from 'react-icons/io'

import NoteItem from '../components/NoteItem'
import { useEffect, useState } from 'react'

const Notes = ({ notes }) => {

    const [showSearch, setShowSearch] = useState(false)
    const [text, setText] = useState('')
    const [filterNotes, setFilterNotes] = useState(notes)

    const handleSearch = () => {
        setFilterNotes(notes.filter(note => {
            if (note.title.toLowerCase().match(text.toLowerCase())) {
                return note
            }
        }))
    }

    useEffect(handleSearch, [text])

    return (
        <section>
            <header className="notes__header">
                {/* {!showSearch && <h2>Notes</h2>} */}
                <h2>Notes</h2>

                {showSearch && <input type="text" value={text}
                    onChange={
                        (e) => {
                            setText(e.target.value)
                            handleSearch()
                        }
                    } autoFocus placeholder='Search' />

                }

                <button className='btn' onClick={() => setShowSearch(prevState => !prevState)}>{showSearch ? <IoMdClose /> : <CiSearch />}</button>
            </header>
            <div className="notes__container">
                {filterNotes.length === 0 && <h2 className='empty__notes'>No Notes found.</h2>}
                {
                    filterNotes.map(note => <NoteItem key={note.id} note={note} />)
                }
            </div>
            <Link to='/create-note' className='btn add__btn'><BsPlusLg /></Link>
        </section>
    )
}

export default Notes