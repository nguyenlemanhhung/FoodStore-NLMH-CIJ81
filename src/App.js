import "./App.css";
import Router from "./routes/Index";
import { FoodProvider } from "./components/FoodCartContext";

function App() {
  return (
    <FoodProvider>
      <Router />
    </FoodProvider>
  );
}

export default App;
