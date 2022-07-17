import React from "react";
import "../restoran.css";
import { useDispatch } from "react-redux";
import "./modal.css"
import { useState, useEffect } from "react";
import axios from "axios";
import { resetOrders,setOrders } from "../store/Actions/Action";

import {
  Button,
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
//!modal
import Modal from "react-modal";

// !customStyles
const customStyles = {
  content: {
    height: 300,
    top: "40%",
    left: "50%",
    right: "auto",
    width: 600,
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const AddOrderModal = ({ name, isOpen, closeModal }) => {
  const dispatch = useDispatch();

  // !open
  const [openMenu, setOpenMenu] = useState(false);

  // !menyu
  const [menyu, setMenyu] = useState([]);

  // !quantity
  const [quantity, setQuantity] = useState("");

  // !mehsul
  const [product, setProduct] = useState(null);

  // !sifaris
  const [sifaris, setSifaris] = useState([]);

  // !completed
  const [completed, setCompleted] = useState(false);

  // !
  const [openTable, setOpenTable] = useState(false);
  // !
  const [table, setTable] = useState(null);

  //!
  const [uuid,setUuid] = useState(null)

  const tables = [
    { id: 1, title: "M-1" },
    { id: 2, title: "M-2" },
  ];

    // !
    const getMenyu = async () => {
      const response = await axios.get("data.json");
      setMenyu(response.data);
  };
  
    // !useeffect
  useEffect(() => {
    getMenyu();
    setUuid(null)
      setTable(null)
      dispatch(resetOrders());
      setSifaris([]);
      let id = Math.floor(Math.random() * 100);
      setUuid(id);
    }, []);

  // !
  const onSelectTable = (item) => {
    setTable(item);
    setOpenTable(false);
  };

  //  !onselect
  const onSelectProduct = (item) => {
    setQuantity(1);
    setOpenMenu(false);
    setProduct(item);
  };

  // !
  const addItem = () => {
    setSifaris((prev) => [
      ...prev,
      { name: product.name, quantity: quantity, price: product.price * quantity },
    ]);
    setProduct(null);
    setQuantity("");
    // setTable(null)

  };
  // !

  let sum = 0;

  sifaris?.forEach((el, index) => {
        sum += el.price
  }); 

  const completeOrder = () => {
    dispatch(setOrders({id: uuid,service: name, masa: table, status:'Sonlanmayıb', sifaris: sifaris, total: sum}));
    setCompleted(true);
    closeModal();
    setUuid(null)
    setTable(null)
    setSifaris([]);
    let id = Math.floor(Math.random() * 100);
    setUuid(id);
  };

  return (
    <Modal 
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <form className="form">
        <ButtonDropdown
          isOpen={openTable}
          toggle={(e) => setOpenTable(!openTable)}
        >
          <DropdownToggle caret>{table?.title || " Masa seçin"}</DropdownToggle>
          <DropdownMenu>
            {tables.map((item) => (
              <DropdownItem header>
                <button className="onselect" onClick={() => onSelectTable(item)}>
                  {item.title}
                </button>
              </DropdownItem>
            ))}
          </DropdownMenu>
        </ButtonDropdown>
        {/*  */}

        <ButtonDropdown isOpen={openMenu} toggle={(e) => setOpenMenu(!openMenu)}>
          <DropdownToggle className="menyu_secin" caret>
            {product?.name || " Menyudan seçin"}
          </DropdownToggle>
          <DropdownMenu>
            {menyu.map((item) => (
              <DropdownItem header>
                <button className="onselect" onClick={() => onSelectProduct(item)}>
                  <ol type="none" >
                  
                    <li>
                  {item.name}

                    </li>
                  </ol>  
                
                </button>
              </DropdownItem>
            ))}
          </DropdownMenu>
        </ButtonDropdown>

        <div className="flex">
          <p className="minus" onClick={() => setQuantity(quantity != 1 ? quantity - 1 : (quantity = 1))}>-</p>

          <input
            className="inp"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            type="text"
          />
          <p className="plus" onClick={() => setQuantity(quantity + 1)}>+</p>


          <Button onClick={addItem} color="primary">
            Əlavə et
          </Button>

         

        </div>
        {sifaris.length
            ? sifaris.map((el) => (
                <p>{el.name + " " + el.quantity + " ədəd " + el.price + " manat"}</p>
              ))
            : null}
      <Button className="complete_order" onClick={() => completeOrder()}>Sifarişi tamamla</Button>

      </form>

    </Modal>
  );
};

export default AddOrderModal;
