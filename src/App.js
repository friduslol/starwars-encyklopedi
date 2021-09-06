import HomePage from "./pages/Homepage";
import NavBar from "./components/Navbar"
import { BrowserRouter, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import PeoplePage from "./pages/PeoplePage";
import PlanetPage from "./pages/PlanetPage";
import VehiclesPage from "./pages/VehiclesPage";
import FilmsPage from "./pages/FilmPage";
import SpeciesPage from "./pages/SpeciesPage";
import StarshipPage from "./pages/StarshipPage";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <NavBar />
          <ReactQueryDevtools initialIsOpen={false} />
          <Route exact path="/" component={HomePage} />
          <Route exact path="/People" component={PeoplePage} />
          <Route exact path="/Planets" component={PlanetPage} />
          <Route exact path="/Vehicles" component={VehiclesPage} />
          <Route exact path="/Films" component={FilmsPage} />
          <Route exact path="/Species" component={SpeciesPage} />
          <Route exact path="/Starships" component={StarshipPage} />
        </QueryClientProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
