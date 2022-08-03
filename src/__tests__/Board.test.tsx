import { render, screen } from "@testing-library/react";
import Board from "../components/Board";
import cards from "../data/cards";

it("Render Board", () => {
  render(<Board cards={cards} />);
  const cardComponent = screen.getAllByTestId("card");
  expect(cardComponent.length).toEqual(cards.length);
});
