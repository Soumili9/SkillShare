import React from 'react';
import { ListGroup, Button, InputGroup, FormControl } from 'react-bootstrap';

const CartItem = ({ item, removeFromCart, updateQuantity }) => {
  return (
    <ListGroup.Item>
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <strong>{item.itemName}</strong> - ₹{item.itemPrice} x {item.quantity}
        </div>
        <div>
          <InputGroup>
            <FormControl
              type="number"
              min="1"
              value={item.quantity}
              onChange={(e) => updateQuantity(item.itemId, parseInt(e.target.value))}
              style={{ width: '60px' }}
            />
          </InputGroup>
        </div>
        <Button variant="danger" size="sm" onClick={() => removeFromCart(item.itemId)}>
          Remove
        </Button>
      </div>
    </ListGroup.Item>
  );
};

export default CartItem;
