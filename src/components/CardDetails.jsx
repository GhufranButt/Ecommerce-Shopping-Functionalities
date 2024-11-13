import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "react-use-cart";

const CardDetails = () => {
  const { addItem } = useCart();
  const { id } = useParams();
  const [cardData, setCardData] = useState([]);
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => response.json())
      .then((data) => {
        const newData = {
          ...data,
          price: Math.floor(Math.random() * 100) + 1,
        };
        setCardData(newData);
        console.log("oppo", newData);
      })

      .catch((error) => console.error("Error fetching card details:", error));
    const randomImage = `https://picsum.photos/500/300?random=${id}`;
    setImageUrl(randomImage);
  }, [id]);

  const words = cardData?.title
    ? cardData.title.split(" ").slice(0, 3).join(" ")
    : "";
  console.log("Data", cardData);
  return (
    <div className="container">
      <div className="card-text">
        <h2>{words}</h2>
        <p>{cardData.body}</p>
      </div>
      <div className="card-image">
        <img src={imageUrl} alt="Random" className="random-image" />
        <button onClick={() => addItem(cardData)} className="btn-cart">
          Add to Cart?
        </button>
      </div>
    </div>
  );
};

export default CardDetails;
