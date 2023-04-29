import type { ReactNode } from "react";
import { classNames } from "utils/appearance";

const Card = ({
  children,
  onClick,
  classes,
}: {
  children: ReactNode;
  onClick?: () => void;
  classes?: { card: string };
}) => {
  return (
    <div
      className={classNames(
        "flex flex-col p-2 bg-white text-black rounded ",
        classes?.card
      )}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Card;
