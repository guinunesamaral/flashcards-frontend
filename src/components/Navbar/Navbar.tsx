import { Link } from "react-router-dom";
import { Button, ButtonGroup } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

const Navbar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ButtonGroup color="secondary" aria-label="small outlined button group">
        <Button>
          <Link to="/deck" style={styles.link}>
            Deck
          </Link>
        </Button>
        <Button>
          <Link to="/test" style={styles.link}>
            Test
          </Link>
        </Button>
        <Button>
          <Link to="/draw" style={styles.link}>
            Draw
          </Link>
        </Button>
        <Button>
          <Link to="/make" style={styles.link}>
            Make
          </Link>
        </Button>
      </ButtonGroup>
    </div>
  );
};

const styles = {
  link: {
    color: "var(--pink-1)",
    textDecoration: "none",
  },
};

export default Navbar;
