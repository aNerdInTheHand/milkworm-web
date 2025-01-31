import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Band from "./pages/Band";
import Discography from "./pages/Discography";
import Album from "./pages/Album";
import "./App.css";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="band" element={<Band />} />
        <Route path="discography">
          <Route index element={<Discography />} />
          <Route path=":albumId" element={<Album />} />
        </Route>
      </Route>
    </Routes>
  );
}
