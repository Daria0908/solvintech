import { FC } from "react";
import { ICardResponse } from "../../../store/card/interface";

interface IProps {
  data: ICardResponse;
  clickCard: (item: ICardResponse) => void;
}

export const Card: FC<IProps> = ({ data, clickCard }) => {
  return (
    <div className="card" onClick={() => clickCard(data)}>
      <img className="picture" src={data.picture} />
      <p className="name">
        name: <span>{data.name}</span>
      </p>
      <p className="email">
        email: <span>{data.email}</span>
      </p>
    </div>
  );
};
