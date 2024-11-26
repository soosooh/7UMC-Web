import { useSelector } from "react-redux";
import { useEffect } from "react";
import { CartIcon } from "../constants/icons";
const Navbar = () => {
  const { amount } = useSelector((state) => state.cart);

  return (
    <nav>
      <navCenter>
        <h3>UMC PlayList</h3>
        <div className="nav-container">
          <CartIcon />
          <div className="amount-container">
            <p className="total-amount">{amount}</p>
          </div>
        </div>
      </navCenter>
    </nav>
  );
};

export default Navbar;
