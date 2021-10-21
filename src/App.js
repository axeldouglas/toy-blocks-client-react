import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import Routes from "./routes";

function App() {
  const store = configureStore();
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;
