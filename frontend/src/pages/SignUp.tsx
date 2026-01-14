import Background from "../components/Background";
import Modal from "../components/Modal";

const SignUp = () => {
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
          />
        </div>
      </Background>
    </div>
  );
};

export default SignUp;
