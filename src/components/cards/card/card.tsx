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
      <h2 className="name">name:{data.name}</h2>
      <p className="email">email: {data.email}</p>
    </div>
  );
};
