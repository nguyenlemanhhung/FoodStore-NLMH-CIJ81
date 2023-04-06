import "./App.css";
import Router from "./routes/Index";
import { FoodProvider } from "./context/FoodCartContext";

function App() {
  return (
    <FoodProvider>
      <Router />
    </FoodProvider>
  );
}

export default App;
