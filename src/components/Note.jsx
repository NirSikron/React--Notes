import React from 'react';
import {observer} from 'mobx-react-lite';

const Note = observer(({note, onDelete, onEdit}) => {
  return (
    <div className="note" style={{backgroundColor: note.tag.color}}>
      <h3>{note.title}</h3>
      <p>{note.body}</p>
      <span>{note.tag.name}</span>
      <div className="timestamp">{new Date(note.timestamp).toLocaleString()}</div>
      <button onClick={() => onEdit(note.id)}>Edit</button>
      <button onClick={() => onDelete(note.id)}>Delete</button>
    </div>
  );
});

export default Note;
