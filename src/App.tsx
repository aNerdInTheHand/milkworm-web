import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Band from "./pages/Band";
import Discography from "./pages/Discography";
import Album from "./pages/Album";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="band" element={<Band />} />
          <Route path="discography" element={<Discography />} />
          <Route
            path="discography/attack-of-the-milkworms"
            element={<Album />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
