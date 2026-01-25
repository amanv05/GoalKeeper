import Modal from "../components/Modal";

interface UpdateGoalModalProps {
  onclick?: () => void;
  firstRef: any;
  secondRef: any;
}

const UpdateGoalModal = () => {
  return (
    <div className="flex justify-center items-center mt-40">
        <Modal
          headText={"Update Goal"}
          firstText={"Goal"}
          secondText={"Description"}
          inputFirst={"Type Your Goal"}
          inputSecond={"Type Your Description"}
          buttonText={"Update"}
        />

    </div>
  );
};

export default UpdateGoalModal;
