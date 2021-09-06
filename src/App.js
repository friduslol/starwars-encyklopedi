import HomePage from "./pages/Homepage";
import NavBar from "./components/Navbar"
import { BrowserRouter, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

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
        </QueryClientProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
