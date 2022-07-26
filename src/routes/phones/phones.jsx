import "./phones.css";
import Layout from "../../components/Layout/Layout";
import { useState } from "react";
import Img1 from "./images/c001.jpg";
import Img2 from "./images/c002.webp";
import Item from "../../components/Item/Item";

const Phones = ({ shoppingCar, addItem, deleteItem }) => {
  const [phones] = useState([
    {
      id: "ce001",
      brand: "Apple",
      model: "Iphone 13",
      img: Img1,
    },
    {
      id: "ce002",
      brand: "Motorola",
      model: "G60",
      img: Img2,
    },
  ]);

  return (
    <Layout shoppingCar={shoppingCar} deleteItem={deleteItem}>
      <div>
        <h2>Telefonos</h2>
        <div className="items-container">
          {phones.map((currentPhone) => {
            return (
              <Item
                item={currentPhone}
                addItem={addItem}
                key={currentPhone.id}
              />
            );
          })}
        </div>
      </div>
      ;
    </Layout>
  );
};

export default Phones;
