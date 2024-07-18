import Lottie from "react-lottie-player";
import animation from "../Lottie/animation.json";
import BackButton from "../Components/BackButton";
function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center gap-8">
      <Lottie animationData={animation} play loop className="lg:w-3/5" />
      <BackButton className="mx-auto" />
    </div>
  );
}

export default NotFoundPage;
