import { ICard } from "../types/Card";

const cardIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const cards: ICard[] = cardIds
  .sort(() => 0.5 - Math.random())
  .map((item: number) => ({
    image: `/images/${(item % (cardIds.length / 2)) + 1}.svg`,
    id: item,
    isDisabled: false,
    isFlipped: false,
  }));

export default cards;
