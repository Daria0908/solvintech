import { FC } from "react";
import { ICardResponse } from "../../store/card/interface";

interface IProps {
  data: ICardResponse;
  close: () => void;
}

export const ModalCard: FC<IProps> = ({ data, close }) => {
  return (
    <div>
      <h2>{data.name}</h2>
      <h2>ModalCard</h2>
      <button onClick={close}>close</button>
    </div>
  );
};
