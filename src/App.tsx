import { Route, Routes } from "react-router-dom";
import Main from "./components/pages/Main";
import MainBar from "./components/bar/MainBar";
import Results from "./components/pages/Results";
import RecipeDetails from "./components/pages/RecipeDetails";

function App() {
  return (
    <>
      <MainBar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/:id" element={<Results />} />
        <Route path="/recipe" element={<RecipeDetails />} />
      </Routes>
    </>
  );
}

export default App;
