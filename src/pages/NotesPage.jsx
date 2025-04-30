import HeaderComponent from "../components/HeaderComponent"
import { useContext } from "react"
import { NoteContext } from "../contexts/note.context"
import NoteCard from "../components/NoteCard"
import FormNote from "../components/FormNote"

function NotesPage() {

  const { notes } = useContext(NoteContext);
  console.log(notes)
  const notesList = notes.map((note) => <li key={note.id}><NoteCard note={note} /></li>)

  return (
    <div className="flex flex-col items-center">
     
      
      <HeaderComponent />
      <FormNote />
      <ul>
        {notesList}
      </ul>
    

    </div>
  )
}

export default NotesPage