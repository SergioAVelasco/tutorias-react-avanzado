import { useState } from "react";
import Layout from "../../components/Layout/Layout";
import Item from "../../components/Item/Item";
import "./computers.css";
import img1 from "./images/c001.jpg";
import img2 from "./images/c002.jpeg";
import img3 from "./images/c003.jpg";

const Computers = ({ shoppingCar, addItem, deleteItem }) => {
  const [computers] = useState([
    {
      id: "c001",
      brand: "Apple",
      model: "M1",
      img: img1,
    },
    {
      id: "c002",
      brand: "Apple",
      model: "M1 ultra",
      img: img1,
    },
    {
      id: "c003",
      brand: "Asus",
      model: "Ultimate",
      img: img2,
    },
    {
      id: "c004",
      brand: "Alienware",
      model: "M15 Gaming",
      img: img3,
    },
  ]);

  return (
    <Layout shoppingCar={shoppingCar} deleteItem={deleteItem}>
      <div className="computer-wrapper">
        <h2>Computadoras</h2>
        <div className="items-container">
          {computers.map((currentComputer) => {
            return (
              <Item
                item={currentComputer}
                addItem={addItem}
                key={currentComputer.id}
              />
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default Computers;
