import React, { useEffect, useState } from "react";
import "./App.css";
import Grid from "@mui/material/Grid";
import Bar from "./components/Bar";
import Note from "./components/Note";
import NoteType from "./interfaces/NoteType";

function App() {
  const [notes, setNotes] = useState<NoteType[]>(() => {
    const storedNoted = localStorage.getItem("notes");

    return storedNoted ? JSON.parse(storedNoted) : [];
  });
  const [notesCounter, setNoteCounter] = useState(notes.length);
  const [filteredNotes, setFilteredNotes] = useState<NoteType[]>(notes);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = () => {
    setNoteCounter(notesCounter + 1);
    setNotes([
      ...notes,
      { id: notesCounter, text: "", header: "כותרת", color: "#ffc107" },
    ]);
  };

  const deleteNote = (note: NoteType) => {
    const newNotes = [...notes];
    newNotes.splice(
      newNotes.findIndex((noteToDelete) => noteToDelete.id === note.id),
      1
    );
    setNotes(newNotes);
  };

  const changeNoteColor = (note: NoteType, color: string) => {
    console.log("note:");
    console.log(note);
    
    setNotes(
      notes.map((noteToChange) => {
        return {
          ...noteToChange,
          color: noteToChange.id === note.id ? color : noteToChange.color,
        };
      })
    );
  };

  const search = (input: string) => {
    setFilteredNotes(
      notes.filter(
        (note) => note.header.includes(input) || note.text.includes(input)
      )
    );
  };

  const notesTags = (
    <Grid container>
      {notes.map((note) => (
        <Grid item xs={3} key={note.id}>
          <Note
            deleteNote={deleteNote}
            note={note}
            changeNoteColor={changeNoteColor}
          />
        </Grid>
      ))}
    </Grid>
  );

  return (
    <div id="app" className="App" dir="rtl">
      <Bar search={search} addNote={addNote} />
      {notesTags}
    </div>
  );
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
