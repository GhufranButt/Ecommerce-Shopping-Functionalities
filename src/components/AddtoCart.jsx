import { useCart } from "react-use-cart";

export default function AddtoCart() {
  const {
    items,
    isEmpty,
    totalItems,
    totalUniqueItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();

  if (isEmpty) {
    return <h1 className="text-center mt-4">Your Card is Empty</h1>;
  }
  return (
    <section className="py-4 container">
      <div className="row justify-content-center">
        <div className="col-12">
          <h5>
            Cart({totalUniqueItems}) Total Items : ({totalItems})
          </h5>
          <table className="table table-light table-hover m-0">
            {items.map((item, index) => {
              return (
                <tr key={index}>
                  <td>
                    <img src="" style={{ height: "1rem" }} />
                  </td>
                  <td> Title : {item.title}</td>
                  <td> Price : ${item.price}</td>
                  <td>Quantity ({item.quantity})</td>
                  <td>
                    <button
                      onClick={() =>
                        updateItemQuantity(item.id, item.quantity - 1)
                      }
                    >
                      -
                    </button>
                    <button
                      onClick={() =>
                        updateItemQuantity(item.id, item.quantity + 1)
                      }
                    >
                      +
                    </button>
                    <button onClick={() => removeItem(item.id)}>
                      Remove Item
                    </button>
                  </td>
                </tr>
              );
            })}
          </table>
          <div className="col-aut ms-auto">
            <h2>Total Price : ${cartTotal}</h2>
          </div>
          <div className="col-auto">
            <button onClick={() => emptyCart()}>Clear Cart</button>
          </div>
        </div>
      </div>
    </section>
  );
}
