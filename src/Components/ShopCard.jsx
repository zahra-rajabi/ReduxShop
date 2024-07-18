import React from "react";
import { shortenText } from "../helpers/helper";
import AddingToCart from "./AddingToCart";

function ShopCard({ item }) {
  let { image, title, price, quantity } = item;
  return (
    <div className="flex flex-wrap items-center justify-between gap-6 px-4 py-2 border-2 border-dashed rounded-lg average:flex-nowrap border-ORANGE bg-WHITE">
      <img src={image} alt={title} className="w-10 h-10 " />

      <h2 className="font-medium text-BLUE">{shortenText(title)}</h2>
      <h2 className="w-1/2 font-medium text-ORANGE average:max-w-fit">
        {price} $
      </h2>

      <AddingToCart quantity={quantity} product={item} />
    </div>
  );
}

export default ShopCard;
