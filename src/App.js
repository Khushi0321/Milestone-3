import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Novels from "./Components/Novels/Novels";
import { useState, useEffect } from "react";
import useFetch from "./Components/Custom Hooks/useFetch";
import { NovelsData } from "./assets/NovelsData";
import NovelsCard from "./Components/Novels/NovelsCard";
function App() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="App">
      <Navbar />

      <input
        type="text"
        placeholder="Search.."
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />
      {NovelsData.filter((val) => {
        if (searchTerm == "") {
          return val;
        } else if (
          val.novelName?.toLowerCase().includes(searchTerm?.toLowerCase())
        ) {
          return val;
        }
      }).map((val, key) => {
        return (
          <div className="user" key={key}>
            <p>
              {val.novelName}: {val.novelDescription}
            </p>
          </div>
        );
      })}
    </div>

    /* <Novels /> */
  );
}
export default App;
