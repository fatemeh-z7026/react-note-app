import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function Note(props) {
  return (
    <div>
      <Card sx={{ minWidth: 275, boxShadow: "0px 0px 3px 0px grey" }}>
        <CardContent sx={{ "&:last-child": { pb: "2rem" }, padding: "2rem" }}>
          <Typography
            sx={{
              color: "text.secondary",
              fontSize: "1.4rem",
            }}
          >
            {props.title}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
