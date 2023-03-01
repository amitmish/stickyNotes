import React from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import Input from "@mui/joy/Input";

function Bar({ addNote, search }: { addNote: Function, search: Function }) {
  const x = (event: EventTarget) => {
    console.log(event.target.value);
  }
  return (
    <div>
      <Grid container sx={{ mt: 2, mr: 1 }}>
        <Grid itemScope>
          <Button
            variant="outlined"
            endIcon={<AddIcon />}
            sx={{ borderRadius: 4 }}
            onClick={() => {
              addNote();
            }}
          >
            הוסף פתק
          </Button>
        </Grid>
        <Grid item xs={2} sx={{ mr: 1 }}>
          <Input onKeyDown={() => x} disabled={false} placeholder="חפש" />
        </Grid>
      </Grid>
    </div>
  );
}

export default Bar;
