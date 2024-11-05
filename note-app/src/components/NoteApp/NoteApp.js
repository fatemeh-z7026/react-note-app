import React, { useState } from "react";
import Note from "./Note";
import ColorBox from "./ColorBox";
import Grid from "@mui/material/Grid2";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import DeleteIcon from "@mui/icons-material/Delete";
import Add from "@mui/icons-material/Add";

export default function NoteApp() {
  const [noteList, setNote] = useState([]);
  const [noteTitle, setNoteTitle] = useState("");

  const addNote = () => {
    let newNote = {
      id: noteList.length + 1,
      title: noteTitle,
    };

    setNote(() => {
      return [...noteList, newNote];
    });
  };

  const noteTitleHandler = (event) => {
    setNoteTitle(event.target.value);
  };
  return (
    <div>
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: "2rem",
        }}
      >
        <TextField
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
          sx={{
            width: "400px",
          }}
          slotProps={{
            input: {
              style: { fontSize: "1.8rem" },
            },
            inputLabel: {
              style: { fontSize: "1.8rem" },
            },
          }}
          value={noteTitle}
          onChange={noteTitleHandler}
        />
        <ColorBox></ColorBox>
        <Container
          sx={{ display: "flex", justifyContent: "center", gap: "1rem" }}
        >
          <DeleteIcon
            sx={{ fontSize: "2.5rem", boxShadow: "0px 0px 2px 0px grey" }}
          ></DeleteIcon>

          <Add
            sx={{ fontSize: "2.5rem", boxShadow: "0px 0px 2px 0px grey" }}
            onClick={addNote}
          ></Add>
        </Container>

        <Grid
          container
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          sx={{
            width: "100%",
            rowGap: { xs: 1, sm: 1, md: 1, lg: 1 },
            textAlign: "center",
            maxWidth: "1100px",
            margin: "0 auto",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          {noteList.map((note) => (
            <Grid item xs={12} sm={6} md={4} lg={4}>
              <Note {...note} key={note.id} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
}
