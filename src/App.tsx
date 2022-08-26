import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Button } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { LoginPage } from "./pages/AuthPage";
import { ErrorPage } from "./pages/ErrorPage";
import TopNavbar from "./components/Toolbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main>
      <TopNavbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </main>
  );
}

export default App;
