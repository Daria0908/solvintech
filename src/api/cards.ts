import { ICardResponse } from "../store/card/interface";

export const fetchCards = async () => {
  const url = "https://layout.solvintech.ru/nuxt/api";

  try {
    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        debugger;
        return res.json();
      })
      .then((data: any) => {
        return data;
      });
    return response;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};
