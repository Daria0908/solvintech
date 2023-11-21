import { FC } from "react";
import { ICardResponse } from "../../store/card/interface";

interface IProps {
  data: ICardResponse;
  close: () => void;
}

export const ModalCard: FC<IProps> = ({ data, close }) => {
  return (
    <div className="modal" onClick={close}>
      <div className="card">
        <img className="picture" src={data.picture} />
        <div className="text">
          <p className="name">
            name: <span>{data.name}</span>
          </p>
          <p className="age">
            age: <span>{data.age}</span>
          </p>
          <p className="email">
            email: <span>{data.email}</span>
          </p>
          <p className="phone">
            phone: <span>{data.phone}</span>
          </p>
          <p className="about">
            about: <span>{data.about}</span>
          </p>
        </div>
        <svg className="btnClose" width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="60" height="60" rx="20" fill="#EB5757" />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M29.5514 30.5514L14.1028 46L13 44.8972L28.4486 29.4486L14.1028 15.1028L15.2055 14L29.5514 28.3458L43.8972 14L45 15.1028L30.6542 29.4486L46.1028 44.8972L45 46L29.5514 30.5514Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
  );
};
