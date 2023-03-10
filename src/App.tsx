import { Route, Routes } from "react-router-dom";
import Main from "./components/pages/Main";
import MainBar from "./components/searchBar/MainBar";
import Results from "./components/pages/Results";

function App() {
  return (
    <>
      <MainBar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/:id" element={<Results />} />
      </Routes>
    </>
  );
}

export default App;
