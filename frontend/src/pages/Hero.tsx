import Background from "../components/Background";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <Background>
      <div className="w-full my-40 flex flex-col justify-center items-center">
        <h1 className="font-jetbrains font-bold text-black text-8xl tracking-tight">
          GoalKeeper
        </h1>
        <p className="font-jetbrains text-black font-semibold text-lg mt-4">
          Write your Goals Daily and tick mark when you complete it.
        </p>
        <div className="flex mt-4 gap-4">
          <div className="flex justify-center items-center gap-3">
            <h2 className="font-jetbrains font-semibold">New User?</h2>
            <Button text="SignUp" onclick={() => navigate("/signup")} />
          </div>
          <div className="flex justify-center items-center gap-3">
            <h2 className="font-jetbrains font-semibold">Already a User?</h2>
            <Button text="SignIn" onclick={() => navigate("/signin")} />
          </div>
        </div>
      </div>
    </Background>
  );
};

export default Hero;
