import logo from "../images/logo.png";
import { AiOutlinePlusSquare, AiOutlineHeart } from "react-icons/ai";
import { IoPaperPlaneOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className="nav">
      <ul>
        <li>
          <img id="logo" src={logo} alt="logo" />
        </li>
        <div className="icons">
          <li className="icons1">
            <AiOutlinePlusSquare />
          </li>
          <li className="icons1">
            <AiOutlineHeart />
          </li>
          <li className="icons1">
            <IoPaperPlaneOutline />
          </li>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
