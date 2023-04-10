import "./App.css";
import Router from "./routes/Index";
import { FoodProvider } from "./context/FoodCartContext";
import { UserProvider } from "./context/UserContext";
import { AuthContext, AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <UserProvider>
        <FoodProvider>
          <Router />
        </FoodProvider>
      </UserProvider>
    </AuthProvider>
  );
}

export default App;
