import { Link } from "react-router-dom";
import { itemQuantity, shortenText } from "../helpers/helper";
import { TbListDetails } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import { TbShoppingBagCheck } from "react-icons/tb";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoAddSharp, IoRemoveSharp } from "react-icons/io5";
import {
  addItem,
  removeItem,
  decrease,
  increase,
} from "../features/card/CardSlice";
import AddingToCart from "./AddingToCart";

function ProductCard({ item }) {
  const { id, title, price, image } = item;
  const state = useSelector((state) => state.card);
  const quantity = itemQuantity(state, id);

  return (
    <div className="w-full  xsm:w-[48%] lmd:w-[32%] lg:w-[24%] border-2  border-dashed border-BLUE rounded-lg bg-WHITE overflow-hidden self-stretch px-2">
      <div className="p-4 mx-auto h-44 w-36">
        <img src={image} alt={title} className="w-full h-full" />
      </div>

      <h2 className="mb-1 font-medium text-ORANGE">{shortenText(title)}</h2>

      <h3 className="mb-2 font-medium">{price} $</h3>

      <div className="flex items-center justify-between my-3 ">
        <Link to={`/Products/${id}`}>
          <TbListDetails className="icon" />
        </Link>

        <AddingToCart quantity={quantity} product={item} />
      </div>
    </div>
  );
}

export default ProductCard;
