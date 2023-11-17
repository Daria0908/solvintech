import { inject, observer } from "mobx-react";
import { useEffect } from "react";
import { ICardResponse } from "../../store/card/interface";
import { Card } from "./card/card";

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

    const showCard = (item: ICardResponse) => {
      console.log(item._id);
    };

    return (
      <>
        <h2>Cards</h2>
        {cardStore.cardsToShow.map((item: ICardResponse) => {
          return <Card key={item._id} data={item} clickCard={showCard} />;
        })}
        {cardStore.cards.length !== cardStore.cardsToShow.length && <button onClick={showMore}>Show more</button>}
      </>
    );
  })
);

export default Cards;
