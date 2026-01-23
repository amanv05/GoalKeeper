import { useRef } from "react";
import Background from "../components/Background";
import Modal from "../components/Modal";
import BACKEND_URL from "../config";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const signin = async () => {
    try {
      const email = emailRef.current?.value;
      const password = passwordRef.current?.value;

      const response = await axios.post(`${BACKEND_URL}/api/v1/user/signin`, {
        email,
        password,
      });

      if (response) {
        localStorage.setItem("token", response.data.token);
        alert("User signed in successfully");
        navigate("/dashboard");
      }
    } catch (error: any) {
      if (error.response?.data?.message === "User not exist") {
        alert("User don't exist navigating to Sign up page...");
        navigate("/signup");
      } else {
        alert("Sign in failed");
      }
    }
  };

  return (
    <div>
      <Background>
        <div className="w-full h-screen flex justify-center items-center">
          <Modal
            headText={"Sign In"}
            firstText={"Email"}
            secondText={"Password"}
            inputFirst={"Type Your Email"}
            inputSecond={"Type Your Password"}
            buttonText={"Signin"}
            firstRef={emailRef}
            secondRef={passwordRef}
            onclick={() => signin()}
          />
        </div>
      </Background>
    </div>
  );
};

export default Signin;
