import React, { useState, useContext } from 'react';
import { NoteContext } from '../contexts/note.context';

function FormNote() {
  const { addNote } = useContext(NoteContext);
  const [title, setTitle] = useState('');
  const [marked, setMarked] = useState(false);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleMarkedChange = (e) => {
    setMarked(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title.trim() !== '') {
      const newNote = {
        id: Date.now(),
        title: title,
        marked: marked,
        date: new Date().toLocaleDateString(),
      };
      addNote(newNote);
      setTitle('');
      setMarked(false);
    } else {
      alert('Por favor, ingresa un título.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md p-4 bg-[#F2E2B1] rounded-lg  shadow-md m-5">
      <div className="mb-2">
        <label htmlFor="title" className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-1">
          Ingrese nueva nota:
        </label>
        <input
          type="text"
          id="title"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-700"
          value={title}
          onChange={handleTitleChange}
          placeholder="Escribe aquí..."
        />
      </div>
      <div className="flex items-center mb-2">
        <input
          type="checkbox"
          id="marked"
          className="mr-2 leading-tight"
          checked={marked}
          onChange={handleMarkedChange}
        />
        <label htmlFor="marked" className="text-gray-700 dark:text-gray-300 text-sm">
          completado?
        </label>
      </div>
      <button
        type="submit"
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline dark:bg-green-600 dark:hover:bg-green-700"
      >
        Agregar
      </button>
    </form>
  );
}

export default FormNote;