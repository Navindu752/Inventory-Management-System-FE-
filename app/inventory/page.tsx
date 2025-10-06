"use client";

import { useState } from "react";

const initialInventory = [
  { name: "bacon", unitPrice: 10.99, quantity: 10 },
  { name: "eggs", unitPrice: 3.99, quantity: 10 },
  { name: "cheese", unitPrice: 6.99, quantity: 10 },
  { name: "chives", unitPrice: 1.0, quantity: 10 },
  { name: "wine", unitPrice: 11.99, quantity: 10 },
  { name: "brandy", unitPrice: 17.55, quantity: 10 },
  { name: "bananas", unitPrice: 0.69, quantity: 10 },
  { name: "ham", unitPrice: 2.69, quantity: 10 },
  { name: "tomatoes", unitPrice: 3.26, quantity: 10 },
  { name: "tissue", unitPrice: 8.45, quantity: 10 },
];

export default function GroceryPage() {
  const [inventory, setInventory] = useState<any[]>(initialInventory);
  const [cart, setCart] = useState<any[]>([]);

  const handleDeleteInventory = (name: string) => {
    const updatedInventory = inventory.filter((item) => item.name !== name);
    setInventory(updatedInventory);
  };

  const handleAddToCart = (name: string) => {
    const item = inventory.find((item) => item.name === name);
    if (item) {
      const haveCart = cart.find((item) => item.name === name);
      if (haveCart) {
        const updatedCart = cart.map((item) => {
          if (item.name === name) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        });
        setCart(updatedCart);
      } else {
        setCart([...cart, { ...item, quantity: 1 }]);
      }
    }
    setInventory([
      ...inventory.filter((item) => item.name !== name),
      {
        ...item,
        quantity: item.quantity - 1,
      },
    ]);
  };

  const handleDeleteCard = (name: string) => {
    const actionCard = cart.find((item) => item.name === name);
    if (actionCard) {
      if (actionCard.quantity === 1) {
        setCart(cart.filter((item) => item.name !== name));
      } else {
        setCart(
          cart.map((item) => {
            if (item.name === name) {
              return { ...item, quantity: item.quantity - 1 };
            }
            return item;
          })
        );
      }
      setInventory([
        ...inventory.filter((item) => item.name !== name),
        {
          ...actionCard,
          quantity: inventory.find((item) => item.name === name)?.quantity + 1,
        },
      ]);
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">📚 Inventory</h1>
      <table className="w-full">
        <thead>
          <tr>
            <th className="text-left">Name</th>
            <th className="text-left">Quantity</th>
            <th className="text-left">Unit Price</th>
            <th className="text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {inventory.map((item) => (
            <tr key={item.name}>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>{item.unitPrice}</td>
              <td>
                <button
                  className="mr-2"
                  color="primary"
                  style={{
                    marginRight: "10px",
                    padding: "10px",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    handleAddToCart(item.name);
                  }}
                >
                  {" "}
                  Add to cart
                </button>
                <button
                  className="mr-2"
                  color="secondary"
                  style={{
                    marginRight: "10px",
                    padding: "10px",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    handleDeleteInventory(item.name);
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h1 className="text-2xl font-bold mb-6">🛒 Cart</h1>
      <table className="w-full">
        <thead>
          <tr>
            <th className="text-left">Name</th>
            <th className="text-left">Quantity</th>
            <th className="text-left">Unit Price</th>
            <th className="text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr key={item.name}>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>{item.unitPrice}</td>
              <td>
                {" "}
                <button
                  className="mr-2"
                  color="secondary"
                  style={{
                    marginRight: "10px",
                    padding: "10px",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    handleDeleteCard(item.name);
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
