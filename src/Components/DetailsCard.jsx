import { GrAttachment } from "react-icons/gr";
import { IoPricetagsOutline } from "react-icons/io5";
import AddingToCart from "./AddingToCart";
import { useBasket } from "../services/contexts/BasketContext";
import { itemQuantity } from "../helpers/helper";
import { Link } from "react-router-dom";
import { IoArrowBackOutline } from "react-icons/io5";

function DetailsCard({ product }) {
  const { id, image, title, description, category, price } = product;
  const { state } = useBasket();
  const quantity = itemQuantity(state, id);
  console.log(quantity);

  return (
    <section>
      <section className="flex flex-col items-center justify-between gap-8 md:items-start md:flex-row">
        <div className="flex items-center justify-center w-full border-2 border-dashed rounded-lg medium:w-2/3 md:w-1/3 border-BLUE h-96 bg-WHITE">
          <img
            src={image}
            alt={title}
            className="w-1/2 h-2/3 md:w-3/4 lg:w-1/2 "
          />
        </div>
        <div className="flex flex-col w-full px-4 py-2 border-2 border-dashed rounded-lg medium:px-8 medium:py-4 md:w-2/3 h-max border-ORANGE">
          <h2 className="mb-8 text-2xl font-bold text-BLUE">{title}</h2>
          <h3 className="w-full mb-8 text-lg md:w-3/4 text-TEXT_GRAY">
            {description}
          </h3>
          <h2 className="flex items-center gap-1 font-medium text-ORANGE">
            <GrAttachment />
            <span>{category}</span>
          </h2>
          <div className="flex flex-col justify-between gap-10 mt-10 medium:flex-row medium:items-center justify-self-end">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-2 text-lg font-bold">
                <IoPricetagsOutline />
                <span>{price} $</span>
              </span>
              <AddingToCart quantity={quantity} product={product} />
            </div>
            <Link
              to="/products"
              className="flex items-center self-end gap-1 px-4 py-2 text-white rounded-lg bg-BLUE hover:bg-BLUE/95"
            >
              <IoArrowBackOutline />
              <span>back to shop</span>
            </Link>
          </div>
        </div>
      </section>
    </section>
  );
}

export default DetailsCard;
