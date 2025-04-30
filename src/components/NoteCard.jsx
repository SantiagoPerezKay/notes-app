import { NoteContext } from '../contexts/note.context';
import { useContext } from 'react';
import { useState } from 'react';
function NoteCard({ note }) {
  const { addNote } = useContext(NoteContext);

  const [title, setTitle] = useState(note.title); // Estado local para el título
  const [marked, setMarked] = useState(note.marked); // Estado local para el marcado




  const handleChange = (e) => {
    setTitle(e.target.value); 
    addNote({ ...note, title: e.target.value })
  }
  const handleMarkedChange = (e) => {
    setMarked(e.target.checked); 
    addNote({ ...note, marked: e.target.value })
  }


  return (
    <div className="max-w-2xl px-4 py-4 bg-[#F2E2B1] rounded-lg shadow-md dark:bg-gray-800 m-5">

      <div className="flex "> 
        <input className="w-full" type="text" name="text" id="text" value={title} onChange={handleChange}   />
        <input checked={marked} type="checkbox" name="check" id="check" onChange={handleMarkedChange} />


      </div>
    </div>
  )
}

export default NoteCard