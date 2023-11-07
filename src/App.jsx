import "./style.css";
import Main from "./components/Main";
import Historial from "./components/Historial";
import { Route, Routes } from "react-router-dom";
import Page from "./components/Page";

function App() {
  return (
    <>
      <Page>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/historial" element={<Historial />} />
        </Routes>
      </Page>
    </>
  );
}

export default App;