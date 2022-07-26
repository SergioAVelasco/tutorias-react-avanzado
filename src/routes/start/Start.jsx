import React from "react";
import Layout from "../../components/Layout/Layout";
import "./Start.css";

const Start = ({ shoppingCar, deleteItem }) => {
  return (
    <Layout shoppingCar={shoppingCar} deleteItem={deleteItem}>
      <div className="start-wrapper">
        <h1>Bienvenidos a la tienda!</h1>;
      </div>
    </Layout>
  );
};

export default Start;
