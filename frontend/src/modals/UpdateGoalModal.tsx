import Modal from "../components/Modal";

const UpdateGoalModal = () => {
  return (
    <div className="w-full h-screen bg-white/80 relative flex justify-center items-center">
      <div className="absolute">
        <Modal
          headText={"Update Goal"}
          firstText={"Goal"}
          secondText={"Description"}
          inputFirst={"Type Your Goal"}
          inputSecond={"Type Your Description"}
          buttonText={"Update"}
        />
      </div>
    </div>
  );
};

export default UpdateGoalModal;
