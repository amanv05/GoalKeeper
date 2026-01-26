import Modal from "../components/Modal";

interface UpdateGoalModalProps {
  onclick?: () => void;
  firstRef: any;
  secondRef: any;
}

const UpdateGoalModal = ({onclick, firstRef, secondRef}: UpdateGoalModalProps) => {
  return (
    <div className="flex justify-center items-center mt-40">
        <Modal
          headText={"Update Goal"}
          firstText={"Goal"}
          secondText={"Description"}
          inputFirst={"Type Your Goal"}
          inputSecond={"Type Your Description"}
          buttonText={"Update"}
          firstRef={firstRef}
          secondRef={secondRef}
          onclick={onclick}
        />

    </div>
  );
};

export default UpdateGoalModal;
