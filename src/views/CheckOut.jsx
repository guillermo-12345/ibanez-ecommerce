import "../App.css";
import { useState, useContext } from "react";
import {Timestamp,  addDoc, collection, documentId, where, writeBatch} from "firebase/firestore";
import { getDocs, query } from "firebase/firestore";
import { db } from "../service/firebase/firebaseConfig";
import { CartContext } from "../context/cartContext";
import CheckoutForm from "../components/CheckoutForm/CheckoutForm";

const CheckOut = () => {
  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState("");
  const [formData, setFormData] = useState({ name: "", phone: "", email: "" });

  const { cart, total, clearCart } = useContext(CartContext);

  const createOrder = async ({ name, phone, email }) => {
    setLoading(true);

    try {
      const objOrder = {
        buyer: {
          name,
          phone,
          email,
        },
        items: cart,
        total: total,
        date: Timestamp.fromDate(new Date()),
      };
      const batch = writeBatch(db);

      const outOfStock = [];

      const ids = cart.map((prod) => prod.id);

      const productsRef = collection(db, "items");

      const productsAddedFromFirestore = await getDocs(
        query(productsRef, where(documentId(), "in", ids))
      );

      const { docs } = productsAddedFromFirestore;

      docs.forEach((doc) => {
        const dataDoc = doc.data();
        const stockDb = dataDoc.stock;

        const productAddedToCart = cart.find((prod) => prod.id === doc.id);
        const prodQuantity = productAddedToCart?.quantity;

        if (stockDb >= prodQuantity) {
          batch.update(doc.ref, { stock: stockDb - prodQuantity });
        } else {
          outOfStock.push({ id: doc.id, ...dataDoc });
        }
      });

      if (outOfStock.length === 0) {
        await batch.commit();

        const orderRef = collection(db, "orders");
        const orderAdded = await addDoc(orderRef, objOrder);

        setOrderId(orderAdded.id);
        clearCart();
      } else {
        console.log("The following products are out of stock:", outOfStock);
      }
    } catch (error) {
      console.log(error);
      // TODO: Handle error and return feedback to the user
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  if (loading) {
    return <h1>Se esta generando su orden...</h1>;
  }

  if (orderId) {
    return <h1>El id de su orden es: {orderId}</h1>;
  }

  return (
    <div>
      <div className="">
        <h3>Resumen de tu compra</h3>
        {cart.map(({ id, img, title, price, quantity }) => (
          <div key={id}>
            <p className=" text-uppercase fw-bolder" id="itemName">
              {title}
            </p>
            <p>Precio Unitario: ${price}</p>
            <p>
              <img width={"80px"} src={img} alt="" />
            </p>
            <p>Cantidad: {quantity}</p>
          </div>
        ))}
        <h4>Total a pagar: ${total}</h4>
      </div>
      <h3>Checkout</h3>
      <CheckoutForm
        onConfirm={createOrder}
        formData={formData}
        onInputChange={handleInputChange}
      />
    </div>
  );
};

export default CheckOut;
