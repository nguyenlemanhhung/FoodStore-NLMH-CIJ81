import "./App.css";
import Router from "./routes/Index";
import { FoodProvider } from "./context/FoodCartContext";
import { UserProvider } from "./context/UserContext";

function App() {
  return (
    <UserProvider>
      <FoodProvider>
        <Router />
      </FoodProvider>
    </UserProvider>
  );
}

export default App;
