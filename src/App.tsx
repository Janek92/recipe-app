import { Route, Routes, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Main from "./components/pages/Main";
import MainBar from "./components/bar/MainBar";
import Results from "./components/pages/Results";
import RecipeDetails from "./components/pages/RecipeDetails";
import Favourites from "./components/pages/Favourites";

import "./styles/App.scss";

function App() {
  const location = useLocation();
  return (
    <>
      <MainBar />
      {/* <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/:id" element={<Results />} />
        <Route path="/recipe" element={<RecipeDetails />} />
        <Route path="/favourites" element={<Favourites />} />
      </Routes> */}
      <TransitionGroup>
        <CSSTransition key={location.key} classNames="fade" timeout={300}>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/:id" element={<Results />} />
            <Route path="/recipe" element={<RecipeDetails />} />
            <Route path="/favourites" element={<Favourites />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </>
  );
}

export default App;
