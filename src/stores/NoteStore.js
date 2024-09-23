import {makeAutoObservable} from 'mobx';

class NotesStore {
  notes = [];
  tags = [
    {name: 'Default', color: 'yellow'},
    {name: 'Important', color: 'red'},
    {name: 'Work', color: 'blue'},
    {name: 'Personal', color: 'green'},
  ];

  constructor() {
    makeAutoObservable(this);
  }

  addNote = (note) => {
    this.notes.push(note);
  };

  deleteNote = (id) => {
    this.notes = this.notes.filter((note) => note.id !== id);
  };

  filterNotes = (query) => {
    if (query.startsWith('#')) {
      const tagQuery = query.slice(1);
      return this.notes.filter((note) => note.tag.name.includes(tagQuery));
    }
    return this.notes.filter(
      (note) =>
        note.tag.name.includes(query) || note.title.includes(query) || note.body.includes(query)
    );
  };

  editNote = (id, updatedNote) => {
    const index = this.notes.findIndex((note) => note.id === id);
    if (index !== -1) {
      this.notes[index] = {...this.notes[index], ...updatedNote};
    }
  };

  addTag = (tag) => {
    this.tags.push(tag);
  };
}

export const notesStore = new NotesStore();
