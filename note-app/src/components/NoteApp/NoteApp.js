import React, { useState } from "react";
import Note from "./Note";
import ColorBox from "./ColorBox";
import Grid from "@mui/material/Grid2";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import DeleteIcon from "@mui/icons-material/Delete";
import Add from "@mui/icons-material/Add";
import Alert from "@mui/material/Alert";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";

export default function NoteApp() {
  const [noteList, setNote] = useState([]);
  const [noteTitle, setNoteTitle] = useState("");
  const [noteColor, setNoteColor] = useState({
    colors: [
      "#fff",
      "#FFD37F",
      "#FFFA81",
      "#D5FA80",
      "#78F87F",
      "#79FBD6",
      "#79FDFE",
      "#7AD6FD",
      "#7B84FC",
      "#D687FC",
      "#FF89FD",
    ],
  });
  const [inputColor, setInputColor] = useState("#fff");
  const [showAlert, setShowAlert] = useState(false);

  const noteTitleHandler = (event) => {
    setNoteTitle(event.target.value);
  };

  if (showAlert) {
    setTimeout(() => {
      setShowAlert(false);
    }, 4000);
  }
  const addNote = () => {
    if (noteTitle === "") {
      setShowAlert(true);
    } else {
      let newnote = {
        id: noteList.length + 1,
        title: noteTitle,
        color: inputColor,
      };
      setNote(() => {
        return [...noteList, newnote];
      });

      setNoteTitle("");
      setInputColor("");
      setShowAlert(false);
    }
  };

  const inputColorHandler = (color) => {
    setInputColor(color);
  };

  return (
    <div>
      {showAlert && (
        <Alert
          sx={{
            fontSize: "2rem",
            "& .MuiAlert-icon": {
              fontSize: "3rem",
            },
          }}
          action={
            <IconButton
              color="inherit"
              sx={{
                fontSize: "2rem", // Increase icon size here
              }}
              onClick={() => setShowAlert(false)}
            >
              <CloseIcon
                fontSize="inherit"
               
              />
            </IconButton>
          }
          severity="error"
        >
          {" "}
          Please Insert A Note!
        </Alert>
      )}

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
            width: "350px",
            backgroundColor: inputColor,
          }}
          slotProps={{
            input: {
              style: { fontSize: "1.3rem" },
            },
            inputLabel: {
              style: { fontSize: "1.3rem" },
            },
          }}
          value={noteTitle}
          onChange={noteTitleHandler}
        />
        <Container
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            cursor: "pointer",
          }}
        >
          {noteColor.colors.map((color) => (
            <ColorBox
              onColor={inputColorHandler}
              color={color}
              key={color}
            ></ColorBox>
          ))}
        </Container>

        <Container
          sx={{ display: "flex", justifyContent: "center", gap: "1rem" }}
        >
          {/* <DeleteIcon
            sx={{
              fontSize: "2.5rem",
              boxShadow: "0px 0px 2px 0px grey",
              cursor: "pointer",
            }}
          ></DeleteIcon> */}

          <Add
            sx={{
              backgroundColor:'#9B7EBD',
              color:"#fff5e4",
              fontSize: "2.5rem",
              // boxShadow: "0px 0px 2px 0px grey",
              cursor: "pointer",
              borderRadius: "2rem",
            }}
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
          {noteList.map((note) => {
            return (
              <Grid item xs={12} sm={6} md={4} lg={4} key={note.id}>
                <Note {...note} key={note.id} />
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </div>
  );
}
