// import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Notes from "./screens/Notes"
import CreateNote from "./screens/CreateNote"
import EditNote from "./screens/EditNote"
import { useEffect, useState } from "react"

// import dummyNotes from './dummy-notes'

const App = () => {

    const [notes, setNotes] = useState(JSON.parse(localStorage.getItem('notes')) || [])

    useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(notes))
    }, [notes])

    return (
        <main id="app">
            <BrowserRouter>
                <Routes>
                    <Route path="/notes" element={<Notes notes={notes} />} />
                    <Route path="/create-note" element={<CreateNote setNotes={setNotes} />} />
                    <Route path="/edit-note/:id" element={<EditNote notes={notes} setNotes={setNotes} />} />
                </Routes>
            </BrowserRouter>
        </main>
    )
}

export default App