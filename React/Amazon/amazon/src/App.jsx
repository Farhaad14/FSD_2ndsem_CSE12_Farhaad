import { useState, useEffect } from "react";

function App() {
  const foodApi =
    "https://www.themealdb.com/api/json/v1/1/filter.php?c=Vegetarian";

  const logoImg =
    "https://upload.wikimedia.org/wikipedia/commons/1/13/Swiggy_logo.png";

  const [meals, setMeals] = useState([]);
  const [cart, setCart] = useState({});
  const [showCartPage, setShowCartPage] = useState(false);

  useEffect(() => {
    fetch(foodApi)
      .then((res) => res.json())
      .then((data) => {
        setMeals(data.meals);
      });
  }, []);

  const addToCart = (meal) => {
    setCart((prev) => {
      const updated = { ...prev };

      if (updated[meal.idMeal]) {
        updated[meal.idMeal].quantity += 1;
      } else {
        updated[meal.idMeal] = {
          ...meal,
          quantity: 1,
        };
      }

      return updated;
    });
  };

  const increaseQty = (id) => {
    setCart((prev) => ({
      ...prev,
      [id]: {
        ...prev[id],
        quantity: prev[id].quantity + 1,
      },
    }));
  };

  const decreaseQty = (id) => {
    setCart((prev) => {
      const updated = { ...prev };

      if (updated[id].quantity === 1) {
        delete updated[id];
      } else {
        updated[id].quantity -= 1;
      }

      return updated;
    });
  };

  const totalItems = Object.values(cart).reduce(
    (acc, item) => acc + item.quantity,
    0
  );

  return (
    <div>
      {/* HEADER */}
      <div
        style={{
          background: "#fc8019",
          color: "white",
          padding: "15px 30px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <img src={logoImg} width="50" />
          <h2>Swiggy Clone</h2>
        </div>

        <button
          onClick={() => setShowCartPage(!showCartPage)}
          style={{
            padding: "10px 20px",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Cart ({totalItems})
        </button>
      </div>

      {/* HOME PAGE */}
      {!showCartPage ? (
        <div style={{ padding: "20px" }}>
          <h2>Vegetarian Meals</h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
              gap: "20px",
              marginTop: "20px",
            }}
          >
            {meals.map((meal) => (
              <div
                key={meal.idMeal}
                style={{
                  background: "white",
                  borderRadius: "12px",
                  overflow: "hidden",
                  boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
                }}
              >
                <img
                  src={meal.strMealThumb}
                  alt={meal.strMeal}
                  style={{
                    width: "100%",
                    height: "220px",
                    objectFit: "cover",
                  }}
                />

                <div style={{ padding: "15px" }}>
                  <h3>{meal.strMeal}</h3>

                  <p style={{ color: "green", fontWeight: "bold" }}>Veg</p>

                  {!cart[meal.idMeal] ? (
                    <button
                      onClick={() => addToCart(meal)}
                      style={{
                        width: "100%",
                        padding: "10px",
                        background: "#fc8019",
                        color: "white",
                        border: "none",
                        borderRadius: "8px",
                        cursor: "pointer",
                      }}
                    >
                      ADD
                    </button>
                  ) : (
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        gap: "15px",
                        alignItems: "center",
                      }}
                    >
                      <button onClick={() => decreaseQty(meal.idMeal)}>
                        -
                      </button>

                      <span>{cart[meal.idMeal].quantity}</span>

                      <button onClick={() => increaseQty(meal.idMeal)}>
                        +
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        /* CART PAGE */
        <div style={{ padding: "20px" }}>
          <h2>Cart Page</h2>

          {Object.values(cart).length === 0 ? (
            <h3>Cart is Empty</h3>
          ) : (
            <>
              {Object.values(cart).map((item) => (
                <div
                  key={item.idMeal}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    background: "white",
                    marginBottom: "15px",
                    padding: "15px",
                    borderRadius: "10px",
                  }}
                >
                  <div style={{ display: "flex", gap: "15px" }}>
                    <img
                      src={item.strMealThumb}
                      width="100"
                      style={{
                        borderRadius: "10px",
                      }}
                    />

                    <div>
                      <h3>{item.strMeal}</h3>
                      <p>Qty: {item.quantity}</p>
                    </div>
                  </div>

                  <div style={{ display: "flex", gap: "10px" }}>
                    <button onClick={() => decreaseQty(item.idMeal)}>
                      -
                    </button>

                    <button onClick={() => increaseQty(item.idMeal)}>
                      +
                    </button>
                  </div>
                </div>
              ))}

              <h2>Total Items: {totalItems}</h2>
            </>
          )}
        </div>
      )}

      {/* FOOTER */}
      <div
        style={{
          background: "#222",
          color: "white",
          textAlign: "center",
          padding: "15px",
          marginTop: "30px",
        }}
      >
        © Swiggy Clone
      </div>
    </div>
  );
}

export default App;