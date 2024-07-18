import BackButton from "../Components/BackButton";
import ShopCard from "../Components/ShopCard";
import { useBasket } from "../services/contexts/BasketContext";
import { GoChecklist, GoHash } from "react-icons/go";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

function CheckoutPage() {
  const { state, dispatch } = useBasket();

  return (
    <section className="flex flex-col-reverse justify-between gap-8 large:flex-row">
      <div className="w-full space-y-4 large:w-1/4">
        <div className="p-4 border-2 border-dashed rounded-lg text-BLUE border-BLUE">
          <ul className="items-center justify-between space-y-4 medium:space-y-0 large:space-y-4 medium:flex large:block">
            <li className="flex gap-2">
              <span className="flex items-center gap-1">
                <GoChecklist className="size-5" /> Total :
              </span>
              <span className="font-semibold text-ORANGE">{state.total} $</span>
            </li>
            <li className="flex gap-2">
              <span className="flex items-center gap-1">
                <GoHash className="size-5" /> Quantity :
              </span>
              <span className="font-semibold text-ORANGE">{state.counter}</span>
            </li>
            <li className="flex gap-2">
              <span className="flex items-center gap-1">
                <IoIosCheckmarkCircleOutline className="size-5" /> Status :
              </span>
              {!state.checkOut ? (
                <span className="font-semibold text-ORANGE">Pending...</span>
              ) : (
                <span className="font-semibold text-ORANGE">In Process</span>
              )}
            </li>
          </ul>
          <button
            className="w-full px-4 py-2 mt-6 rounded-lg large:mt-12 bg-ORANGE"
            onClick={() => dispatch({ type: "CHECKOUT" })}
          >
            CheckOut
          </button>
        </div>
        <div>
          <BackButton />
        </div>
      </div>
      <div className="flex flex-col w-full gap-4 large:w-3/4 ">
        {!state.selectedItems.length && (
          <p className="text-2xl font-bold tracking-wide ">
            Nothing in your basket
          </p>
        )}
        {state.selectedItems.map((item) => (
          <ShopCard item={item} key={item.id} />
        ))}
      </div>
    </section>
  );
}

export default CheckoutPage;
