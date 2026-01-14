import Modal from "../components/Modal";

const AddGoalModal = () => {
  return (
    <div className="w-full h-screen bg-white/80 relative flex justify-center items-center">
      <div className="absolute">
        <Modal
          headText={"Add Goal"}
          firstText={"Goal"}
          secondText={"Description"}
          inputFirst={"Type Your Goal"}
          inputSecond={"Type Your Description"}
          buttonText={"Add"}
        />
      </div>
    </div>
  );
};

export default AddGoalModal;
