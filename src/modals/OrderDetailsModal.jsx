import React from "react";
import "../restoran.css";
import { useDispatch, useSelector } from "react-redux";
import "./modal.css";
import { useState } from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    height: 300,
    top: "40%",
    left: "50%",
    right: "auto",
    width: 850,
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    position: "relative",
  },
};

const OrderDetailsModal = ({ order, name, isOpen, closeModal }) => {
    const [status, setStatus] = useState("Sifariş hazırlanır");
  // const allOrders = useSelector((state) => state.MenyuReducer);
  //  const dispatch =useDispatch()
  const Status = () => {
    setStatus("Sifariş verildi");
  };

  setTimeout(() => {
    Status();
  }, 10000);

  let sum = 0;

order?.forEach((el, index) => {
      sum += el.price
});
  

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      {order.map((item, index) => {
       
        return (
          <div className="order">
            <table className="table">
              <tr>
              <th>Ad</th>
              <th>Say</th>
              <th>Qiymət</th>
              <th>Status</th>
              </tr>
              <tr>
              <td>{item.name}</td>
            <td>{item.quantity + ' ədəd'}</td>
            <td>{item.price + ' AZN'}</td>
                <td>{status}</td>
              </tr>
            </table>
            
          </div>
        );
      })}
      <div>
        <h3>Cəmi məbləğ</h3>
        <h3>{sum + ' AZN'}</h3>
      </div>
      <button className="btn close_modal" onClick={closeModal}>
        Bağla
      </button>
    </Modal>
  );
};

export default OrderDetailsModal;
