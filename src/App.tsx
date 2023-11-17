import { Provider } from "mobx-react";
import cardStore from "./store/card";
import Cards from "./components/cards/cards";

function App() {
  return (
    <Provider cardStore={cardStore}>
      <Cards />
    </Provider>
  );
}

export default App;
