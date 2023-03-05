import { Grid, Card, CardHeader } from "@mui/material";
import { Textarea } from "@mui/joy";
import React, { useState } from "react";
import { IconButton } from "@mui/material";
import { ModeEdit, Delete } from "@mui/icons-material";
import NoteType from "../interfaces/NoteType";
import ColorSelectionIcon from "./ColorSelectIcon";

function Note({
  note,
  deleteNote,
  changeNoteColor,
}: {
  note: NoteType;
  deleteNote: Function;
  changeNoteColor: Function;
}) {
  const [editable, setEditable] = useState(false);
  const handleChangeNoteColor = (color: string) => {
    changeNoteColor(note, color);
  };
  return (
    <div>
      <Card sx={{ m: 2, border: 1 }}>
        <CardHeader
          action={
            <div>
              <IconButton
                aria-label="settings"
                onClick={() => setEditable(!editable)}
              >
                <ModeEdit />
              </IconButton>
              <ColorSelectionIcon
                currentColor={note.color}
                changeColor={handleChangeNoteColor}
              />
              <IconButton
                aria-label="settings"
                onClick={() => {
                  deleteNote(note);
                }}
              >
                <Delete />
              </IconButton>
            </div>
          }
          title={note.header}
          sx={{
            bgcolor: note.color,
          }}
        />
        <Grid container>
          <Grid item xs={12}>
            <Textarea
              disabled={!editable}
              minRows={6}
              variant="plain"
              defaultValue={note.text}
              placeholder="הכנס טקסט"
              sx={{ borderRadius: 0, border: editable ? 2 : 0 }}
            />
          </Grid>
        </Grid>
      </Card>
    </div>
  );
}

export default Note;
