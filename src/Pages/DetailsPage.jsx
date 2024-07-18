import { useParams } from "react-router-dom";
import { useDetails } from "../services/contexts/ProductContext";
import Loader from "../Components/Loader";
import DetailsCard from "../Components/DetailsCard";

function DetailsPage() {
  const { id } = useParams();
  const product = useDetails(+id);

  return (
    <section>
      {!product && <Loader />}
      {product && <DetailsCard product={product} />}
    </section>
  );
}

export default DetailsPage;
