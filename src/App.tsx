import { useEffect, useState } from "react";
import Home from "./pages/Home";
import Adm from "./pages/admDetails";
import AlayFront from "./pages/alayFrontDetails";

function getHashPath() {
  return window.location.hash || "#/";
}

function App() {
  const [hashPath, setHashPath] = useState(getHashPath);

  useEffect(() => {
    const handleHashChange = () => {
      setHashPath(getHashPath());
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  if (hashPath === "#/adm-details") {
    return <Adm />;
  }

  if (hashPath === "#/alay-front-details") {
    return <AlayFront />;
  }

  return <Home />;
}

export default App;
