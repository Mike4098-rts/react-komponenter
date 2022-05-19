import { useEffect, useState } from "react";
import "./App.css";
import SectionList from "./Sections";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/sections")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data);
      });
  }, []);

  return <div className="Header">{data && <SectionList data={data} />}</div>;
}

export default App;
