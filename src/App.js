import "./App.css";
// import React, { useState } from "react";
import GetImg from "./components/GetImg";

function App() {
  // const [imgs, setImgs] = useState([]);

  // const fetchImg = async () => {
  //   let res = await fetch("https://picsum.photos/v2/list?limit=20");
  //   let data = await res.json();
  //   console.log(data);
  //   setImgs(data);
  // };

  return (
    <div className="App">
      <h1>Hello</h1>
      <GetImg />
    </div>
  );
}

export default App;
