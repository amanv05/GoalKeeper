import { useRef } from "react";
import { useState } from "react";
import Background from "../components/Background";
import Modal from "../components/Modal";
import BACKEND_URL from "../config";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Alert from "../components/Alert";

const Signin = () => {
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
        handleOpenAlert("User signed in successfully");
        setTimeout(() => {
          navigate("/dashboard");
        }, 1000);
      }
    } catch (error: any) {
      if (error.response?.data?.message === "User not exist") {
        handleOpenAlert("User don't exist navigating to Sign up page...");
        setTimeout(() => {
          navigate("/signup");
        }, 1000);
      } else {
        handleOpenAlert("Sign in failed");
      }
    }
  };

  return (
    <div>
      <Background>
        <div className="relative w-full h-screen flex justify-center items-center">
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

export default Signin;
