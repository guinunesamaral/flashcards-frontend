import { randomIndex } from "./Home";
import { flashcardDatabase } from "../../shared/flashcard.database";

describe("testing random index", () => {
  test("can't repeat index", () => {
    const firstIndex = randomIndex(flashcardDatabase);
    const secondIndex = randomIndex(flashcardDatabase);

    expect(() => firstIndex !== secondIndex).toBe(true);
  });
});
