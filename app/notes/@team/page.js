'use client';

import { useEffect, useState, useMemo } from "react";
import { FaEdit } from "react-icons/fa";

export default function AllNotes() {
    const [notes, setNotes] = useState([])
    useEffect(() => {
        async function fetchAllNotes() {
            const res = await fetch('http://localhost:3000/api/notes')
            const data = await res.json()
           setNotes(data)
        }
        fetchAllNotes()
    },[])

    const renderNotes = useMemo(() => {
        return notes?.map(note => {
            return (
                <div key={note._id} className="p-5 flex flex-col bg-gradient-to-b from-[#CCE3DE] to-[#EAF4F4] rounded-lg">
                    <h1 className="font-bold text-2xl">{note.title}</h1>
                    <p>{note.description}</p>
                    <span className="flex justify-center opacity-50 cursor-pointer hover:opacity-100 mt-2">
                        <FaEdit />
                    </span>
                </div>
            )
        })
    }, [notes])

    return (
        <section className="grid grid-cols-2 p-5 gap-[2vw]">
            {notes?.length ? renderNotes : (
                <p className="text-2xl flex justify-center items-center">Loading Notes...</p>
            )}
        </section>
    )
}