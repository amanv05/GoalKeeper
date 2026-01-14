import Background from "../components/Background";
import Modal from "../components/Modal";

const Signin = () => {
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
          />
        </div>
      </Background>
    </div>
  );
};

export default Signin;
