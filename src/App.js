import HomePage from "./pages/Homepage";
import NavBar from "./components/Navbar"
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
      <Route exact path="/" component={HomePage} />
      </BrowserRouter>
    </div>
  );
}

export default App;
