import "./Header.css";
import { Link } from "react-router-dom";
import ShoppingImg from "./assets/shoping-cart.svg";
import { useState } from "react";
import Shopping from "../Shopping/Shopping";
import img1 from "../../routes/computers/images/c001.jpg";

const Header = () => {
  const [shoopingCar, setShoopingCar] = useState([
    {
      id: "c001",
      brand: "Apple",
      model: "M1",
      img: img1,
    },
  ]);
  const [openShopping, setOpenShopping] = useState(false);

  const toogleShooping = () => setOpenShopping(!openShopping);

  return (
    <div className="header-wrapper">
      <Link to={"/"} className="store-name">
        <h3>Sergio's store</h3>
      </Link>
      <div className="opt-wrapper">
        <Link className="opt-single" to={"/computers"}>
          Computadoras
        </Link>
        <Link className="opt-single" to={"/phones"}>
          Telefonos
        </Link>
      </div>
      <div className="shopping-container">
        <div className="shopping-wrapper" onClick={toogleShooping}>
          <img src={ShoppingImg} alt="" className="shopping-img" />{" "}
          <div className="shopping-count">{"0 articulos"}</div>
        </div>
        {openShopping && <Shopping items={shoopingCar} />}
      </div>
    </div>
  );
};

export default Header;
