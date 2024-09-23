import React, {useState} from 'react';
import {observer} from 'mobx-react-lite';
import {notesStore} from '../stores/NoteStore';

const TagFilter = observer(() => {
  const [filter, setFilter] = useState('');

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const filteredNotes = notesStore.filterNotes(filter);

  return (
    <div className="tag-filter">
      <input
        type="text"
        placeholder="Filter by tag, title or body"
        value={filter}
        onChange={handleFilterChange}
      />
      <div className="note-list">
        {filteredNotes.map((note) => (
          <div key={note.id} className="note" style={{backgroundColor: note.tag.color}}>
            <h3>{note.title}</h3>
            <p>{note.body}</p>
            <span>{note.tag.name}</span>
            <div>{new Date(note.timestamp).toLocaleString()}</div>
          </div>
        ))}
      </div>
    </div>
  );
});

export default TagFilter;
