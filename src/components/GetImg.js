// import React from "react";
// import { useState, useEffect } from "react";

// const GetImage = ({ user }) => {
//   const [img, setImg] = useState([]);
//   const fetchImg = async () => {
//     const fetchedData = await fetch(
//       "https://picsum.photos/v2/list?page=2&limit=5"
//     );
//     const res = await fetchedData.json();
//     setImg(res);
//   };
//   useEffect(() => {
//     fetchImg();
//   }, []);

//   return (
//     <div>
//       {user &&
//         img.map((item, index) => {
//           return (
//             <div className="tile">
//               <div className="profileUser">
//                 <img
//                   src={item.download_url}
//                   width={30}
//                   height={30}
//                   className="profileImg"
//                   alt="Random Image"
//                 />
//                 <h4>{item.author} </h4>
//               </div>

//               <img
//                 key={item.id}
//                 src={item.download_url}
//                 width={300}
//                 height={300}
//               />

//               <h4 id="nameptag">{item.author}: </h4>
//             </div>
//           );
//         })}
//     </div>
//   );
// };

// export default GetImage;
