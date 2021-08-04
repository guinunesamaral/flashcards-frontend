import React, { useState } from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Header from "../../components/Header/Header";
import FlashcardBox from "../FlashcardBox/FlashcardBox";
import Study from "../Study/Study";
import Random from "../Random/Random";
import AddFlashcard from "../AddFlashcard/AddFlashcard";
import "./Home.css";
import { useGlobalContext } from "../../context/context";

function Home() {
  const { flashcards } = useGlobalContext();
  const [index, setIndex] = useState(0);

  const randomIndex = (max: number) => {
    return Math.floor(Math.random() * max);
  };

  const random = () => {
    setIndex(randomIndex(flashcards.length));
  };

  return (
    <div className="home">
      <Header />
      <div className="cardsBar">
        <BrowserRouter>
          <div className="navBar">
            <Link className="flashcardsBtn btn" to="/flashcard-box">
              Cards
            </Link>
            <Link className="studyBtn btn" to="/study">
              Study
            </Link>
            <Link
              className="randomBtn btn"
              to="/random"
              onClick={() => {
                if (flashcards.length > 0) random();
              }}
            >
              Random
            </Link>
            <Link className="addFlashcardBtn btn" to="/add-flashcard">
              Add
            </Link>
          </div>
          <Switch>
            <Route exact path="/" component={FlashcardBox} />
            <Route exact path="/flashcard-box" component={FlashcardBox} />
            <Route exact path="/study" component={Study} />
            <Route
              exact
              path="/random"
              component={() => <Random index={index} />}
            />
            <Route exact path="/add-flashcard" component={AddFlashcard} />
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default Home;
