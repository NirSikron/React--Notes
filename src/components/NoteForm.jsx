import React, {useState} from 'react';
import {observer} from 'mobx-react-lite';
import {notesStore} from '../stores/NoteStore';

const NoteForm = observer(({noteToEdit, onEditComplete}) => {
  const [title, setTitle] = useState(noteToEdit?.title || '');
  const [body, setBody] = useState(noteToEdit?.body || '');
  const [tag, setTag] = useState(noteToEdit?.tag.name || notesStore.tags[0].name);

  const handleSubmit = (e) => {
    e.preventDefault();
    const selectedTag = notesStore.tags.find((t) => t.name === tag);
    const newNote = {
      id: noteToEdit ? noteToEdit.id : Date.now(),
      title,
      body,
      tag: selectedTag,
      timestamp: new Date().toISOString(),
    };
    if (noteToEdit) {
      notesStore.editNote(noteToEdit.id, newNote);
      onEditComplete();
    } else {
      notesStore.addNote(newNote);
    }
    setTitle('');
    setBody('');
    setTag(notesStore.tags[0].name);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea placeholder="Body" value={body} onChange={(e) => setBody(e.target.value)} />
      <select value={tag} onChange={(e) => setTag(e.target.value)}>
        {notesStore.tags.map((tag, index) => (
          <option key={index} value={tag.name}>
            {tag.name}
          </option>
        ))}
      </select>
      <button type="submit">{noteToEdit ? 'Update Note' : 'Add Note'}</button>
    </form>
  );
});

export default NoteForm;
