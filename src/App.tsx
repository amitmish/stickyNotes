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

  const [notesCounter, setNoteCounter] = useState(() => {
    const storedNoted = localStorage.getItem("notesCounter");

    return storedNoted ? JSON.parse(storedNoted) : 0;
  });

  const [search, setSearch] = useState("");

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
    localStorage.setItem("notesCounter", JSON.stringify(notesCounter));
  }, [notes]);

  const addNote = () => {
    setNoteCounter(notesCounter + 1);
    setNotes([
      ...notes,
      {
        id: notesCounter,
        text: "",
        header: `כותרת ${notesCounter}`,
        color: "#ffc107",
      },
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

  const changeNoteText = (note: NoteType, text: string) => {
    setNotes(
      notes.map((noteToChange) => {
        return {
          ...noteToChange,
          text: noteToChange.id === note.id ? text : noteToChange.text,
        };
      })
    );
  };

  const changeNoteColor = (note: NoteType, color: string) => {
    setNotes(
      notes.map((noteToChange) => {
        return {
          ...noteToChange,
          color: noteToChange.id === note.id ? color : noteToChange.color,
        };
      })
    );
  };

  const notesTags = (
    <Grid container>
      {notes
        .filter(
          (note) => note.header.includes(search) || note.text.includes(search)
        )
        .map((note) => (
          <Grid item xs={3} key={note.id}>
            <Note
              deleteNote={deleteNote}
              note={note}
              changeNoteColor={changeNoteColor}
              changeNoteText={changeNoteText}
            />
          </Grid>
        ))}
    </Grid>
  );

  return (
    <div id="app" className="App" dir="rtl">
      <Bar
        search={(input: string) => {
          console.log(input);

          setSearch(input);
        }}
        addNote={addNote}
      />
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
