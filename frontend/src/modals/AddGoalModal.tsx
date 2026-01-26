import Modal from "../components/Modal";

interface AddGoalModalProps {
  onclick?: () => void;
  firstRef: any;
  secondRef: any;
}

const AddGoalModal = ({onclick, firstRef, secondRef}: AddGoalModalProps) => {
  return (
    <div className="flex justify-center items-center mt-40">
        <Modal
          headText={"Add Goal"}
          firstText={"Goal"}
          secondText={"Description"}
          inputFirst={"Type Your Goal"}
          inputSecond={"Type Your Description"}
          buttonText={"Add"}
          onclick={onclick}
          firstRef={firstRef}
          secondRef={secondRef}
        />
      </div>
  );
};

export default AddGoalModal;
