import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import OrderDetailsModal from "../modals/OrderDetailsModal";

// !AllOrders
const AllOrders = () => {
  const allOrders = useSelector((state) => state.MenyuReducer);
  const [openModal, setOpenModal] = useState(false);
  let sum = 0;
  allOrders?.forEach((el, index) => {
    sum += el.total;
  });

  return (
    <div style={{ padding: "20px" }}>
      {allOrders?.length ? (
        <div>
          {allOrders?.map((order, index) => (
            <div
              key={order?.id}
              style={{
                width: "60%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingTop: "8px",
                fontSize: "18px",
              }}
            >
              <p>{index + 1}</p>
              <p>{order?.masa?.title}</p>
              <p>{order?.service}</p>
              <p>{order?.total + " AZN"}</p>
              <button className="btn" onClick={() => setOpenModal(true)}>
                sifarişə bax
              </button>
              <OrderDetailsModal
                order={order?.sifaris}
                isOpen={openModal}
                closeModal={() => setOpenModal(false)}
              />
            </div>
          ))}
          <p>Yekun: {sum + " manat"} </p>
        </div>
      ) : (
        <h3>Sifariş yoxdur</h3>
      )}
    </div>
  );
};

export default AllOrders;
