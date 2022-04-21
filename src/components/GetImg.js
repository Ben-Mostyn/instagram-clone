import React, { useState, useEffect } from "react";

const GetImg = () => {
  const [imgs, setImgs] = useState([]);

  const fetchImg = async () => {
    let res = await fetch("https://picsum.photos/v2/list?limit=20");
    let data = await res.json();
    console.log(data);
    setImgs(data);
  };

  useEffect(() => {
    fetchImg();
  }, []);

  return (
    <div className="mainContainer">
      {imgs.map((item, index) => {
        return (
          <div className="imgDiv">
            <h1>{item.author}</h1>
            <img key={item.id} src={item.download_url} alt="Random Images" />
          </div>
        );
      })}
    </div>
  );
};
export default GetImg;
