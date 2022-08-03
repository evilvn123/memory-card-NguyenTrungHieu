import { fireEvent, render, screen } from "@testing-library/react";
import Card from "../components/Card";
import { ICard } from "../types/Card";

const card: ICard = {
  image: `/images/${1 / 6 + 1}.svg`,
  id: 1,
  isDisabled: false,
  isFlipped: false,
};
const onClick = jest.fn();

it("Render basic Card", () => {
  render(<Card card={card} onClick={onClick} />);
  const mainTag = screen.getByTestId("card");
  expect(mainTag).toHaveClass("card");
  expect(mainTag).not.toHaveClass("is-flipped");
  fireEvent.click(mainTag);
  expect(onClick).toBeCalledTimes(1);
});

it("Render flipped Card", () => {
  render(<Card card={{ ...card, isFlipped: true }} onClick={onClick} />);
  const mainTag = screen.getByTestId("card");
  expect(mainTag).toHaveClass("card");
  expect(mainTag).toHaveClass("is-flipped");
});

it("Check correct image", () => {
  render(<Card card={{ ...card, isFlipped: true }} onClick={onClick} />);
  const backSide = "/images/backside.svg";
  expect(screen.getByTestId("front-face")).toHaveAttribute("src", backSide);
  expect(screen.getByTestId("back-face")).toHaveAttribute("src", card.image);
});
