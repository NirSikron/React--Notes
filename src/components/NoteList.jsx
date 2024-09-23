import React, {useState} from 'react';
import {observer} from 'mobx-react-lite';
import {notesStore} from '../stores/NoteStore';
import Note from './Note';
import NoteForm from './NoteForm';

const NoteList = observer(() => {
  const [noteToEdit, setNoteToEdit] = useState(null);

  const handleDelete = (id) => {
    notesStore.deleteNote(id);
  };

  const handleEdit = (id) => {
    const note = notesStore.notes.find((note) => note.id === id);
    setNoteToEdit(note);
  };

  const handleEditComplete = () => {
    setNoteToEdit(null);
  };

  return (
    <div className="note-list">
      <NoteForm noteToEdit={noteToEdit} onEditComplete={handleEditComplete} />
      {notesStore.notes.map((note) => (
        <Note key={note.id} note={note} onDelete={handleDelete} onEdit={handleEdit} />
      ))}
    </div>
  );
});

export default NoteList;
