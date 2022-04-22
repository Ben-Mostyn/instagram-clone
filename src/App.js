import { useState, useEffect } from "react";
import "./App.css";
// import GetImage from "./components/GetImg";
import { UsernameForm } from "./components/usernameForm";
import Navbar from "./components/Navbar";
import Story from "./components/Story";
import { tokenCheck } from "./utils";
// import Modal from "./modal/modal";

const App = () => {
  const [user, setUser] = useState();
  const [img, setImg] = useState([]);
  const [show, setShow] = useState(false);

  const fetchImg = async () => {
    const fetchedData = await fetch(
      "https://picsum.photos/v2/list?page=2&limit=5"
    );
    const res = await fetchedData.json();
    setImg(res);
  };
  useEffect(() => {
    if (localStorage.key("myToken")) {
      tokenCheck(setUser);
    }
    fetchImg();
  }, []);

  return (
    <div className="full">
      <nav classname="nav">
        <Navbar setShow={setShow} />
      </nav>

      <UsernameForm
        setUser={setUser}
        user={user}
        onClose={() => setShow(false)}
        show={show}
      />
      <div className="mainContent">
        <div className="storydiv">
          <Story user={user} />
        </div>

        <div className="App">
          {/* <GetImage user={user} /> */}
          <div>
            {user &&
              img.map((item, index) => {
                return (
                  <div className="tile">
                    <div className="profileUser">
                      <img
                        src={item.download_url}
                        width={30}
                        height={30}
                        className="profileImg"
                        alt="Random"
                      />
                      <h4>{item.author} </h4>
                    </div>

                    <img
                      key={item.id}
                      src={item.download_url}
                      width={300}
                      height={300}
                      alt="random"
                    />

                    <h4 id="nameptag">{item.author}: </h4>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
