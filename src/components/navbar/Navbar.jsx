import React, { useState } from "react";
import "../navbar/Navbar.css";
import AddOrderModal from "../../modals/AddOrderModal";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

// !navbar
const Navbar = () => {
  const [name, setName] = useState("");
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
    setOpenOrder(true)
  }


  // !
  const [openOrder,setOpenOrder]=useState(false)

  return (
    <div className="nav_bar">
      <h2 className="name">Anadolu Restaurants</h2>
      <button className="btn" onClick={openModal}>
         Sifariş əlavə et
      </button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <form>
          <h3>Adınızı daxil edin</h3>
          <input className="inp"  onChange={(e) => setName(e.target.value)} />
          <button className="btn_modal" onClick={closeModal}>
            Daxil olun
          </button>
        </form>
      </Modal>

      <AddOrderModal name={name} isOpen={openOrder} closeModal={()=>setOpenOrder(false)} />
    </div>
  );
};

export default Navbar;
