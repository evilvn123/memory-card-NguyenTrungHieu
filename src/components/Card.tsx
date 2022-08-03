import classnames from "classnames";
import "../styles/card.scss";
import { ICard } from "../types/Card";

type CardProps = {
  card: ICard;
  onClick: (id: number) => void;
};

const Card = (props: CardProps) => {
  const { card, onClick } = props;
  const { image, id, isFlipped, isDisabled } = card;
  const backSide = "/images/backside.svg";

  const handleClick = () => {
    !isFlipped && !isDisabled && onClick(id);
  };

  return (
    <div
      data-testid="card"
      className={classnames("card", {
        "is-flipped": isFlipped,
      })}
      onClick={handleClick}
    >
      <div className="card-face">
        <img data-testid="front-face" src={backSide} alt="card backside" />
      </div>
      <div className="card-face card-back-face">
        <img data-testid="back-face" src={image} alt="card" />
      </div>
    </div>
  );
};

export default Card;
