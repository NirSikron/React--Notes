import React, {useState} from 'react';
import NoteList from './components/NoteList';
import TagFilter from './components/TagFilter';
import TagList from './components/TagList';
import TagForm from './components/TagForm';
import {notesStore} from './stores/NoteStore';

const App = () => {
  const [selectedTag, setSelectedTag] = useState(null);

  const handleTagSelect = (tag) => {
    setSelectedTag(tag);
  };

  const tags = notesStore.tags;

  return (
    <div className="App">
      <header>
        <h1>Notes App</h1>
      </header>
      <main>
        <TagFilter />
        <TagForm />
        <TagList tags={tags} onSelect={handleTagSelect} />
        <NoteList selectedTag={selectedTag} />
      </main>
    </div>
  );
};

export default App;
