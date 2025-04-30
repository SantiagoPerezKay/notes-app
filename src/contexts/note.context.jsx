import { createContext, useState } from "react"

const NoteContext = createContext()

const noteList = [
    {
        id: 1,
        title: "comprar alimento para perro",
        marked: false
    },
    {
        id: 2,
        title: "sacar la basura",
        marked: false
    },
    {
        id: 3,
        title: "ir a correr",
        marked: false
    }

]

function NoteProviderWrapper(props) {

    const [notes, setNotes] = useState(noteList)

    
    const addNote = (newNote) => {
        const alreadyExists = notes.some(note => note.id === newNote.id);
      
        if (!alreadyExists) {
          setNotes([...notes, newNote]);
        }
      };

  


    return (
        <NoteContext.Provider value={{ notes, setNotes,addNote }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export { NoteContext, NoteProviderWrapper }
