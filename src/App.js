import Category from "./Components/Category";
import Pages from "./Pages/Pages";
import { BrowserRouter } from "react-router-dom";
import Search from "./Components/Search";

function App() {
  return (
    <BrowserRouter>
      <Search />
      <Category />
      <Pages />
    </BrowserRouter>
  );
}

export default App;
