import { useBasket } from "../services/contexts/BasketContext";
import { TbShoppingBagCheck } from "react-icons/tb";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoAddSharp, IoRemoveSharp } from "react-icons/io5";
function AddingToCart({ quantity, product }) {
  const { dispatch } = useBasket();
  function clickHandler(value) {
    dispatch({ type: value, payload: product });
  }
  return (
    <section className="flex items-center gap-2 ">
      {quantity === 1 && (
        <div className="p-1 rounded-lg cursor-pointer bg-ORANGE">
          <RiDeleteBin6Line
            className="size-5 text-GRAY"
            onClick={() => clickHandler("REMOVE_ITEM")}
          />
        </div>
      )}
      {quantity > 1 && (
        <div className="p-1 rounded-lg cursor-pointer bg-ORANGE">
          <IoRemoveSharp
            className="size-5 text-GRAY"
            onClick={() => clickHandler("DECREASE")}
          />
        </div>
      )}
      {quantity > 0 && <span className="font-semibold">{quantity}</span>}
      {quantity > 0 && (
        <div className="p-1 rounded-lg cursor-pointer bg-ORANGE">
          <IoAddSharp
            className="size-5 text-GRAY"
            onClick={() => clickHandler("INCREASE")}
          />
        </div>
      )}
      {quantity === 0 && (
        <div className="p-1 rounded-lg cursor-pointer bg-ORANGE">
          <TbShoppingBagCheck
            className="size-5 text-GRAY"
            onClick={() => clickHandler("ADD_ITEM")}
          />
        </div>
      )}
    </section>
  );
}

export default AddingToCart;
