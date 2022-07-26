import "./Shopping.css";

const Shopping = ({ items, deleteItem }) => {
  return (
    <div className="shopping-content-wrapper">
      <p>Carrito de compras</p>
      {items.length === 0 && <p>Aun no has agregado</p>}
      {items.length > 0 && (
        <div className="shopping-items-container">
          {items.map((currentItem, index) => (
            <div
              className="shopping-items-single"
              key={`${currentItem.id}-${index}`}
            >
              <div>{`${currentItem.brand} ${currentItem.model}`}</div>
              <button
                className="delete-item-button"
                onClick={() => deleteItem(currentItem)}
              >
                eliminar
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Shopping;
