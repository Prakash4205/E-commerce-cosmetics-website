import { useLocation } from "react-router-dom";
import "./Bill.css"; // Link to your custom CSS file

function Bill() {
  const location = useLocation();
  const { cart, totalAmount } = location.state || { cart: [], totalAmount: 0 };

  const handleDownload = () => {
    const billText = cart.map(item => 
      `${item.name} - Rs.${item.price.toFixed(2)} x ${item.quantity}`
    ).join("\n");

    const totalText = `\nTotal: Rs.${totalAmount.toFixed(2)}`;

    const element = document.createElement("a");
    const file = new Blob([billText + totalText], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = "bill.txt";
    document.body.appendChild(element);
    element.click();
  };

  return (
    <div className="bill-page">
      <h1>🧾 Bill Summary</h1>
      <table className="bill-table">
        <thead>
          <tr>
            <th>Item</th>
            <th>Price (Rs.)</th>
            <th>Quantity</th>
            <th>Subtotal (Rs.)</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.price.toFixed(2)}</td>
              <td>{item.quantity}</td>
              <td>{(item.price * item.quantity).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3 className="total-text">Total: Rs.{totalAmount.toFixed(2)}</h3>
      <button onClick={handleDownload} className="checkout-button">📥 Download Bill</button>
    </div>
  );
}

export default Bill;
