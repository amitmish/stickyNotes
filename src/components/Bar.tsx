import React from "react";
import logo from "./logo.svg";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import Input from "@mui/joy/Input";

function Bar({ addNote }: { addNote: Function }) {
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
          <Input disabled={false} placeholder="חפש" />
        </Grid>
      </Grid>
    </div>
  );
}

export default Bar;
