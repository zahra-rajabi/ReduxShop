import { TbShoppingBagCheck } from "react-icons/tb";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoAddSharp, IoRemoveSharp } from "react-icons/io5";
import { useDispatch } from "react-redux";
import {
  addItem,
  decrease,
  increase,
  removeItem,
} from "../features/card/CardSlice";
function AddingToCart({ quantity, product }) {
  const dispatch = useDispatch();
  return (
    <section className="flex items-center gap-2 ">
      {quantity === 1 && (
        <div className="p-1 rounded-lg cursor-pointer bg-ORANGE">
          <RiDeleteBin6Line
            className="size-5 text-GRAY"
            onClick={() => dispatch(removeItem(product))}
          />
        </div>
      )}
      {quantity > 1 && (
        <div className="p-1 rounded-lg cursor-pointer bg-ORANGE">
          <IoRemoveSharp
            className="size-5 text-GRAY"
            onClick={() => dispatch(decrease(product))}
          />
        </div>
      )}
      {quantity > 0 && <span className="font-semibold">{quantity}</span>}
      {quantity > 0 && (
        <div className="p-1 rounded-lg cursor-pointer bg-ORANGE">
          <IoAddSharp
            className="size-5 text-GRAY"
            onClick={() => dispatch(increase(product))}
          />
        </div>
      )}
      {quantity === 0 && (
        <div className="p-1 rounded-lg cursor-pointer bg-ORANGE">
          <TbShoppingBagCheck
            className="size-5 text-GRAY"
            onClick={() => dispatch(addItem(product))}
          />
        </div>
      )}
    </section>
  );
}

export default AddingToCart;
