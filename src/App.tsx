import { Route, Routes } from "react-router-dom";
import Main from "./components/pages/Main";
import MainBar from "./components/searchBar/MainBar";

function App() {
  return (
    <>
      <MainBar />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </>
  );
}

export default App;
