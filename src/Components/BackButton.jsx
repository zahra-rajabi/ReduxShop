import { Link } from "react-router-dom";
import { IoArrowBackOutline } from "react-icons/io5";

function BackButton() {
  return (
    <Link
      to="/products"
      className="flex items-center gap-1 px-4 py-2 text-white rounded-lg bg-BLUE hover:bg-BLUE/95"
    >
      <IoArrowBackOutline />
      <span>back to shop</span>
    </Link>
  );
}

export default BackButton;
