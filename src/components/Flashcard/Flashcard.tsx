import React, { useState } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@material-ui/core";
import { useDispatch } from "react-redux";
import "./Flashcard.css";

const Flashcard = React.memo(
  ({ id, front, back }: { id: string; front: string; back: string }) => {
    const dispatch = useDispatch();
    const [side, setSide] = useState("front");

    const remove = () => {
      dispatch({ type: "", payload: id });
    };

    const flip = () => {
      if (side === "front") setSide("back");
      else setSide("front");
    };

    return (
      <Card variant="outlined" className="card" onClick={flip}>
        <CardContent className="cardContent">
          {side === "front" ? (
            <Typography
              variant="body1"
              color="primary"
              className="frontTypography"
            >
              {front}
            </Typography>
          ) : (
            <Typography
              variant="body1"
              color="secondary"
              component="p"
              className="backTypography"
            >
              {back}
            </Typography>
          )}
        </CardContent>
        <CardActions className="cardActions">
          <Button
            variant="contained"
            color="secondary"
            className="btn"
            onClick={remove}
          >
            Remove
          </Button>
        </CardActions>
      </Card>
    );
  }
);

export default Flashcard;
