import { useParams } from "react-router-dom";
import Loader from "../Components/Loader";
import DetailsCard from "../Components/DetailsCard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchingProducts } from "../features/Products/ProductSlice";

function DetailsPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchingProducts());
  }, []);

  const product = useSelector((store) =>
    store.products.products.find((item) => item.id === +id)
  );

  return (
    <section>
      {!product && <Loader />}
      {product && <DetailsCard product={product} />}
    </section>
  );
}

export default DetailsPage;
