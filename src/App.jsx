import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import AddtoCart from "./components/AddtoCart";
import CardDetails from "./components/CardDetails";
import { CartProvider } from "react-use-cart";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [cardData, setCardData] = useState([]);
  useEffect(() => {
    // Fetch fake data from JSONPlaceholder based on the card ID
    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then((response) => response.json())
      .then((data) => {
        setCardData(data);
        console.log(data);
      })
      .catch((error) => console.error("Error fetching card details:", error));
  }, []);
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <div className="cardGrid">
                {cardData.map((item) => (
                  <Card
                    id={item.id}
                    title={item.title}
                    desc={item.body}
                    item={item}
                  />
                ))}
              </div>
            }
          />
          <Route path="/card/:id" element={<CardDetails />} />
          <Route path="/cart" element={<AddtoCart />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
