import React, { useState } from "react";
import { connect } from "react-redux";
import {
  removeFromCart,
  adjustQty,
} from "../../redux/Shopping/shopping-action";

const CartItem = ({ itemData, removeFromCart, adjustQty }) => {
  const [input, setInput] = useState(itemData.qty);

  const onChangeHandler = (e) => {
    setInput(e.target.value);
    adjustQty(itemData.id, e.target.value);
  };
  return (
    <div>
      <img src={itemData.id.url} alt={itemData.id.name} />
      <div>
        <p>{itemData.id.name}</p>
        <p>{itemData.id.description}</p>
        <p>{itemData.id.price}</p>
        <p>{itemData.id.size}</p>
      </div>
      <div>
        <div>
          <label htmlFor="qty">Qty</label>
          <input
            min="1"
            type="number"
            id="qty"
            name="qty"
            value={input}
            onChange={onChangeHandler}
          />
        </div>
        <button onClick={() => removeFromCart(itemData.id)} className="danger">
          <i className="material-icons">delete</i>
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeFromCart: (id) => dispatch(removeFromCart(id)),
    adjustQty: (id, value) => dispatch(adjustQty(id, value)),
  };
};

export default connect(null, mapDispatchToProps)(CartItem);
