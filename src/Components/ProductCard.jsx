import { Link } from "react-router-dom";
import { itemQuantity, shortenText } from "../helpers/helper";
import { TbListDetails } from "react-icons/tb";
// import { useBasket } from "../services/contexts/BasketContext";
import AddingToCart from "./AddingToCart";

function ProductCard({ item }) {
  const { id, title, price, image } = item;
  // const { state } = useBasket();
  const quantity = 0;

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
