import React from "react";
import { useState, useEffect } from "react";

const Story = () => {
  const [img, setImg] = useState([]);
  const fetchImg = async () => {
    const fetchedData = await fetch(
      "https://picsum.photos/v2/list?page=2&limit=20"
    );
    const res = await fetchedData.json();
    setImg(res);
  };
  useEffect(() => {
    fetchImg();
  }, []);

  return (
    <div className="Story">
      {img.map((item, index) => {
        return (
          <div>
            <img
              key={item.id}
              src={item.download_url}
              width={70}
              height={70}
              alt="story Profile pic"
            />
          </div>
        );
      })}
    </div>
  );
};

export default Story;
