import { useState } from "react";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import shoes from "./data";
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);

  function addToCart(shoe) {
    const foundItem = cart.find((item) => item.id === shoe.id);

    if (foundItem) {
      const updatedCart = cart.map((item) => {
        if (item.id === shoe.id) {
          return {
            ...item, quantity: item.quantity + 1
          };
        }

        return item;
      });
      setCart(updatedCart);
    } 
    else
    {
      setCart([
        ...cart,
        {
          ...shoe,quantity: 1
        }
      ]);
    }
  }

  function removeFromCart(id) {
    const updatedCart = cart
      .map((item) => {
        if (item.id === id) {
          return {...item,quantity: item.quantity - 1
          };
        }

        return item;
      })
      .filter((item) => item.quantity > 0);

    setCart(updatedCart);
  }

  const total = cart.reduce((sum, item) => {
    return sum + item.price * item.quantity;
  }, 0);

  return (
    <>
      <Navbar />

      <div className="main">
        <div className="left-section">
          <h2>Available Shoes</h2>

          <div className="product-list">
            {shoes.map((shoe) => (
              <ProductCard
                key={shoe.id}
                shoe={shoe}
                addToCart={addToCart}
              />
            ))}

          </div>
        </div>

        <div className="right-section">
          <h2>Shopping Cart</h2>
          {cart.length === 0 ? (
            <p>No items added.</p>
          ) : (
            <>
              {cart.map((item) => (

                <div className="cart-item" key={item.id}>
                  <div className="cart-top">
                    <div className="cart-info">                  
                      <div>                  
                        <p className="shoe-name">{item.name}</p>                  
                        <p>${item.price}</p>                  
                      </div>                  
                    </div>

                    <div className="qty-box">                  
                      <button onClick={() => removeFromCart(item.id)}>
                        -
                      </button>                  
                      <span>{item.quantity}</span>
                  
                      <button onClick={() => addToCart(item)}>
                        +
                      </button>
                  
                    </div>
                  </div>

                  <hr />
                </div>

              ))}
              <h3 className="total">
                Total : ${total}
              </h3>

            </>
          )}

        </div>
      </div>
    </>
  );
}

export default App;