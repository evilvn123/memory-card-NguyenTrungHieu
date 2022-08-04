import { useEffect, useRef, useState } from "react";
import Card from "./Card";
import "../styles/board.scss";
import { ICard } from "../types/Card";

type BoardProps = {
  cards: ICard[];
};

const Board = (props: BoardProps) => {
  const { cards } = props;
  const [openCards, setOpenCards] = useState<Array<number>>([]);
  const [clearedCards, setClearedCards] = useState<Array<number>>([]);
  const [shouldDisableAllCards, setShouldDisableAllCards] =
    useState<boolean>(false);
  const timeout = useRef<NodeJS.Timeout>(setTimeout(() => {}));

  const evaluate = () => {
    const [first, second] = openCards;
    setShouldDisableAllCards(false);
    if (
      (first % (cards.length / 2)) + 1 ===
      (second % (cards.length / 2)) + 1
    ) {
      setClearedCards((prev) => [...prev, first, second]);
      setOpenCards([]);
      return;
    }
    timeout.current = setTimeout(() => {
      setOpenCards([]);
    }, 1000);
  };

  const handleCardClick = (id: number) => {
    if (openCards.length === 1) {
      setOpenCards((prev) => [...prev, id]);
      setShouldDisableAllCards(true);
    } else {
      clearTimeout(timeout.current);
      setOpenCards([id]);
    }
  };

  useEffect(() => {
    if (openCards.length === 2) {
      timeout.current = setTimeout(evaluate, 500);
    }
    return () => {
      clearTimeout(timeout.current);
    };
  }, [openCards]);

  const checkIsFlipped = (id: number) => {
    return clearedCards.includes(id) || openCards.includes(id);
  };

  const currentCards = cards.map((item) => ({
    ...item,
    isDisabled: shouldDisableAllCards,
    isFlipped: checkIsFlipped(item.id),
  }));

  return (
    <div className="board">
      {currentCards.map((item) => {
        return <Card key={item.id} card={item} onClick={handleCardClick} />;
      })}
    </div>
  );
};

export default Board;
