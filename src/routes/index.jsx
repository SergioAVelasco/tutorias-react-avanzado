import { BrowserRouter, Routes, Route } from "react-router-dom";
import Start from "./start/Start";
import Computers from "./computers/computers";
import Phones from "./phones/phones";
import { useState } from "react";

const RouterRoot = () => {
  const [shoopingCar, setShoopingCar] = useState([]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="computers" element={<Computers />} />
        <Route path="phones" element={<Phones />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouterRoot;
