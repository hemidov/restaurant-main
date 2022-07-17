import Navbar from "./components/navbar/Navbar";
import { useSelector } from "react-redux";
import AllOrders from "./components/AllOrders";

const App = () => {
  const selector = useSelector((state) => state.MenyuReducer);
  console.log("selector", selector);

  return (
    <div className="App">
      <Navbar />
      <AllOrders />
    </div>
  );
};

export default App;
