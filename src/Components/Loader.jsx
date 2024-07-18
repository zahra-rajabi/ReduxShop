import { RotatingLines } from "react-loader-spinner";
function Loader() {
  return (
    <RotatingLines
      height="60"
      width="60"
      strokeColor="#14213D"
      strokeWidth="2"
    />
  );
}

export default Loader;
