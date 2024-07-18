import { Link } from "react-router-dom";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { useBasket } from "../services/contexts/BasketContext";

function Layout({ children }) {
  let { state } = useBasket();

  return (
    <>
      <header className="flex items-center justify-between header">
        <Link to="products">Online Shop</Link>
        {state.counter > 0 && (
          <Link
            to="/checkout"
            className="relative p-1 rounded-lg bg-GRAY text-ORANGE"
          >
            <PiShoppingCartSimpleBold className="size-6" />
            <span className="absolute flex items-center justify-center w-5 h-5 text-xs rounded-full bg-TEXT_GRAY -right-3 -top-2 text-GRAY ">
              {state.counter}
            </span>
          </Link>
        )}
      </header>
      {children}
    </>
  );
}

export default Layout;
