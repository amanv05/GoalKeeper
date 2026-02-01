import Background from "../components/Background";
import Modal from "../components/Modal";
import BACKEND_URL from "../config";
import { useRef } from "react";
import { useState } from "react";
import Alert from "../components/Alert";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [openAlert, setOpenAlert] = useState<boolean>(false);
  const [alertMessage, setAlertMessage] = useState<string>("");
  const navigate = useNavigate();

  const handleCloseAlert = () => {
    setOpenAlert(false);
  };

  const handleOpenAlert = (message: string) => {
    setOpenAlert(true);
    setAlertMessage(message);

    setTimeout(() => {
      handleCloseAlert();
    }, 2000);
  };

  const signup = async () => {
    try {
      const email = emailRef.current?.value;
      const password = passwordRef.current?.value;

      await axios.post(`${BACKEND_URL}/api/v1/user/signup`, {
        email,
        password,
      });

      handleOpenAlert("User signed up successfully");
      setTimeout(() => {
        navigate("/signin");
      }, 1000);
    } catch (error: any) {
      if (error.response?.data?.message === "User already exists") {
        handleOpenAlert("User already exists redirecting to Sign in page...");
        setTimeout(() => {
          navigate("/signin");
        }, 1000);
      } else {
        handleOpenAlert("Sign up failed");
      }
    }
  };

  return (
    <div>
      <Background>
        <div className="relative w-full h-screen flex justify-center items-center">
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
          <div className="absolute bottom-16 right-18">
            <Alert
              open={openAlert}
              message={alertMessage as string}
              onClose={handleCloseAlert}
            />
          </div>
        </div>
      </Background>
    </div>
  );
};

export default SignUp;
