import React, {useState} from 'react';
import {observer} from 'mobx-react-lite';
import {notesStore} from '../stores/NoteStore';

const TagForm = observer(() => {
  const [name, setName] = useState('');
  const [color, setColor] = useState('yellow');

  const handleSubmit = (e) => {
    e.preventDefault();
    notesStore.addTag({name, color});
    setName('');
    setColor('yellow');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Tag Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <select value={color} onChange={(e) => setColor(e.target.value)}>
        <option value="yellow">Yellow</option>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
      </select>
      <button type="submit">Add Tag</button>
    </form>
  );
});

export default TagForm;
