import "./styles.css";
import { RoutePaths } from "./routes/route-paths";
import configureStore from "./redux/store";
import { Provider } from "react-redux";

const initialState = {};
const store = configureStore(initialState);
export default function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <RoutePaths />
      </Provider>
    </div>
  );
}
