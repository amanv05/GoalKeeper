import Background from "../components/Background";
import Modal from "../components/Modal";
import BACKEND_URL from "../config";
import { useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const signup = async () => {
    try {
      const email = emailRef.current?.value;
      const password = passwordRef.current?.value;

      await axios.post(`${BACKEND_URL}/api/v1/user/signin`, {
        email,
        password,
      });

      alert("User signed up successfully");
      navigate("/signin");
    } catch (error: any) {
      if (error.response?.data?.message === "User already exists") {
        alert("User already exists redirecting to Sign in page...");
        navigate("/signin");
      } else {
        alert("Sign up failed");
      }
    }
  };

  return (
    <div>
      <Background>
        <div className="w-full h-screen flex justify-center items-center">
          <Modal
            headText={"Sign Up"}
            firstText={"Email"}
            secondText={"Password"}
            inputFirst={"Type Your Email"}
            inputSecond={"Type Your Password"}
            buttonText={"Signup"}
            firstRef={emailRef}
            secondRef={passwordRef}
            onclick={() => signup()}
          />
        </div>
      </Background>
    </div>
  );
};

export default SignUp;
