import { makeObservable, observable } from "mobx";
import { fetchCards } from "../../api/cards";
import { ICardResponse } from "./interface";
import mockCardsData from "../../api/test";

class CardStore {
  constructor() {
    makeObservable(this, {
      cards: observable,
      countCardToShow: observable,
      cardsToShow: observable,
      modalCard: observable,
    });
  }

  cards: Array<ICardResponse> = [];
  cardsToShow: Array<ICardResponse> = [];

  countCardToShow: number = 3;

  modalCard: ICardResponse | null = null;

  showMore() {
    let countVisible: number = this.cardsToShow.length;
    const cardsLenght: number = this.cards.length;
    if (countVisible === cardsLenght) {
      return;
    }
    countVisible += this.countCardToShow;
    if (countVisible > cardsLenght) {
      countVisible = cardsLenght;
    }
    this.cardsToShow = this.cards.slice(0, countVisible);
  }

  async getCards() {
    const data = await Promise.resolve(mockCardsData);
    this.cards = data;
    this.cardsToShow = this.cards.slice(0, 3);
  }

  setModalCard(item: ICardResponse | null) {
    this.modalCard = item;
  }
}

const cardStore = new CardStore();
export default cardStore;
