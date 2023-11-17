import { inject, observer } from "mobx-react";
import { useEffect } from "react";
import { ICardResponse } from "../../store/card/interface";
import { Card } from "./card/card";
import { ModalCard } from "../modal/modal";
import ReactModal from "react-modal";

const Cards = inject("cardStore")(
  observer(({ cardStore }: any) => {
    useEffect(() => {
      getData();
    }, [cardStore]);

    const getData = () => {
      cardStore.getCards();
    };

    const showMore = () => {
      cardStore.showMore();
    };

    const setModalCard = (item: ICardResponse | null) => {
      cardStore.setModalCard(item);
    };

    const closeModal = () => {
      cardStore.setModalCard(null);
    };

    return (
      <>
        <h2>Cards</h2>
        {cardStore.cardsToShow.map((item: ICardResponse) => {
          return <Card key={item._id} data={item} clickCard={setModalCard} />;
        })}
        {cardStore.cards.length !== cardStore.cardsToShow.length && <button onClick={showMore}>Show more</button>}
        {cardStore.modalCard && (
          <ReactModal isOpen={!!cardStore.modalCard} shouldCloseOnOverlayClick={true} shouldCloseOnEsc={true} onRequestClose={closeModal}>
            <ModalCard data={cardStore.modalCard} close={closeModal} />
          </ReactModal>
        )}
      </>
    );
  })
);

export default Cards;
