import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Main from "./components/pages/Main";
import MainBar from "./components/bar/MainBar";
import Results from "./components/pages/Results";
import RecipeDetails from "./components/pages/RecipeDetails";
import Favourites from "./components/pages/Favourites";

function App() {
  const location = useLocation();
  return (
    <>
      <MainBar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Main />} />
          <Route path="/:id" element={<Results />} />
          <Route path="/recipe" element={<RecipeDetails />} />
          <Route path="/favourites" element={<Favourites />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
