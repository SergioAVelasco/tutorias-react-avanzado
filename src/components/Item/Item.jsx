import "./Item.css";

const Item = ({ item }) => {
  return (
    <div className="item-wrapper">
      <button className="add-to-shop">Agregar al carrito</button>
      <div className="item-info">
        <p>
          <b>Marca: </b>
          {`${item.brand}`}
        </p>
        <p>
          <b>Modelo: </b>
          {`${item.model}`}
        </p>
      </div>
      <img src={item.img} alt="" className="img-item" />
    </div>
  );
};
export default Item;
