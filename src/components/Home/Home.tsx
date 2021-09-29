import { Route, Switch } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "../Header/Header";
import FlashcardDeck from "../FlashcardDeck/FlashcardDeck";
import FlashcardTest from "../FlashcardTest/FlashcardTest";
import FlashcardDraw from "../FlashcardDraw/FlashcardDraw";
import FlashcardMaker from "../FlashcardMaker/FlashcardMaker";
import FlashcardInterface from "../../shared/flashcard.interface";
import "./Home.css";

export const randomIndex = (flashcards: Array<FlashcardInterface>) => {
  return Math.floor(Math.random() * flashcards.length);
};

const Home = () => {
  const flashcards = useSelector(
    (state: any) => state.flashcardReducer.flashcards
  );

  if (flashcards) {
    return (
      <div className="home">
        <Header />
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => (
              <FlashcardDeck {...props} flashcards={flashcards} />
            )}
          />
          <Route
            path="/deck"
            render={(props) => (
              <FlashcardDeck {...props} flashcards={flashcards} />
            )}
          />
          <Route exact path="/test" component={FlashcardTest} />
          <Route
            path="/draw"
            component={() => <FlashcardDraw index={randomIndex(flashcards)} />}
          />
          <Route path="/make" component={FlashcardMaker} />
        </Switch>
      </div>
    );
  }
  return <div>Loading...</div>;
};

export default Home;
