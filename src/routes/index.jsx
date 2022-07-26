import { BrowserRouter, Routes, Route } from "react-router-dom";
import Start from "./start/Start";
import Computers from "./computers/computers";
import Phones from "./phones/phones";
import { useState } from "react";

const RouterRoot = () => {
  const [shoppingCar, setShoppingCar] = useState([]);
  const addItem = (item) => {
    const newState = [...shoppingCar];
    newState.push(item);
    setShoppingCar(newState);
  };
  const deleteItem = (dItem) => {
    const newState = shoppingCar.filter((cItem) => {
      return cItem.id !== dItem.id;
    });
    setShoppingCar(newState);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Start
              shoppingCar={shoppingCar}
              addItem={addItem}
              deleteItem={deleteItem}
            />
          }
        />
        <Route
          path="computers"
          element={
            <Computers
              shoppingCar={shoppingCar}
              addItem={addItem}
              deleteItem={deleteItem}
            />
          }
        />
        <Route
          path="phones"
          element={
            <Phones
              shoppingCar={shoppingCar}
              addItem={addItem}
              deleteItem={deleteItem}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default RouterRoot;
