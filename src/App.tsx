import { Route, Routes } from "react-router-dom";
import Main from "./components/pages/Main";
import MainBar from "./components/bar/MainBar";
import Results from "./components/pages/Results";
import RecipeDetails from "./components/pages/RecipeDetails";
import Favourites from "./components/pages/Favourites";

function App() {
  return (
    <>
      <MainBar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/:id" element={<Results />} />
        <Route path="/recipe" element={<RecipeDetails />} />
        <Route path="/favourites" element={<Favourites />} />
      </Routes>
    </>
  );
}

export default App;
