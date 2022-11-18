import Pages from "./Pages/Pages";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./Components/Navigation";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Pages />
    </BrowserRouter>
  );
}

export default App;
