import "./Layout.css";
import Header from "../Header/Header";

const Layout = ({ children, shoppingCar, deleteItem }) => {
  return (
    <div className="layout-wrapper">
      <Header shoppingCar={shoppingCar} deleteItem={deleteItem} />
      {children}
    </div>
  );
};

export default Layout;
