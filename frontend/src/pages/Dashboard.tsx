import NavBar from "../components/NavBar";
import GoalCard from "../components/GoalCard";
import Background from "../components/Background";
import AddGoalModal from "../modals/AddGoalModal";
import UpdateGoalModal from "../modals/UpdateGoalModal";
import { useEffect, useRef, useState } from "react";
import BACKEND_URL from "../config";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Alert from "../components/Alert";

interface GoalTypes {
  _id: string;
  title: string;
  description: string;
  isCompleted: boolean;
}

const Dashboard = () => {
  const [goals, setGoals] = useState<GoalTypes[]>([]);
  const [goalModal, setGoalModal] = useState(false);
  const [updateGoal, setUpdateGoal] = useState(false);
  const [goalID, setGoalID] = useState<string>("");
  const titleRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLInputElement>(null);
  const updatedTitle = useRef<HTMLInputElement>(null);
  const updatedDescription = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const [openAlert, setOpenAlert] = useState<boolean>(false);
  const [alertMessage, setAlertMessage] = useState<string>("");

  const getGoals = async () => {
    const token = localStorage.getItem("token");
    const response = await axios.get(`${BACKEND_URL}/api/v1/goal/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (response) {
      setGoals(response.data.data);
    }
  };

  useEffect(() => {
    getGoals();
  }, []);

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

  const deleteGoals = async (id: string) => {
    const token = localStorage.getItem("token");
    if (!token) {
      handleOpenAlert("User not signed in");
      setTimeout(() => {
        navigate("/");
      }, 1000);
    }
    await axios.delete(`${BACKEND_URL}/api/v1/goal/delete/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    getGoals();
    handleOpenAlert("Goal deleted successfully");
  };

  const logout = () => {
    localStorage.removeItem("token");
    handleOpenAlert("User logged out successfully");
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  const createGoal = async () => {
    const title = titleRef.current?.value;
    const description = descriptionRef.current?.value;
    const token = localStorage.getItem("token");

    if (!token) {
      handleOpenAlert("User not signed in");
      setTimeout(() => {
        navigate("/");
      }, 1000);
    }

    const response = await axios.post(
      `${BACKEND_URL}/api/v1/goal/create`,
      {
        title: title,
        description: description,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );

    if (response) {
      getGoals();
      setGoalModal((x) => !x);
      handleOpenAlert("Goal created successfully");
    }
  };

  const openUpdateModal = (id: string) => {
    setGoalID(id);
    setUpdateGoal((x) => !x);
  };

  const goalUpdation = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      handleOpenAlert("User not signed in");
      setTimeout(() => {
        navigate("/");
      }, 1000);
    }

    const id = goalID;
    const title = updatedTitle.current?.value;
    const description = updatedDescription.current?.value;

    const updated = await axios.patch(
      `${BACKEND_URL}/api/v1/goal/update/${id}`,
      {
        title: title,
        description: description,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );

    if (updated) {
      getGoals();
      handleOpenAlert("Goal updated successfully");
      setUpdateGoal((x) => !x);
    }
  };

  const toggleGoal = async (id: string, nextValue: boolean) => {
    const token = localStorage.getItem("token");

    if (!token) {
      handleOpenAlert("User not signed in");
      setTimeout(() => {
        navigate("/");
      }, 1000);
    }

    const toggled = await axios.patch(
      `${BACKEND_URL}/api/v1/goal/completed/${id}`,
      {
        isCompleted: nextValue,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );

    if (toggled) {
      if (nextValue === true) {
        handleOpenAlert("Goal Completed 🥳");
      }
      getGoals();
    }
  };

  return (
    <>
      <Background>
        <div className="relative w-full h-screen">
          <div className="w-[50%] mx-auto">
            <NavBar
              logoutFunction={logout}
              addFunction={() => setGoalModal((x) => !x)}
            />
            {goalModal ? (
              <AddGoalModal
                firstRef={titleRef}
                secondRef={descriptionRef}
                onclick={createGoal}
              />
            ) : updateGoal ? (
              <UpdateGoalModal
                firstRef={updatedTitle}
                secondRef={updatedDescription}
                onclick={goalUpdation}
              />
            ) : goals && goals.length > 0 ? (
              <div className="w-full">
                {Array.isArray(goals) &&
                  goals.map(({ _id, title, description, isCompleted }) => (
                    <GoalCard
                      key={_id}
                      _id={_id}
                      title={title}
                      description={description}
                      isCompleted={isCompleted}
                      onDelete={deleteGoals}
                      onUpdate={openUpdateModal}
                      onToggle={toggleGoal}
                    />
                  ))}
              </div>
            ) : (
              <div className="flex justify-center items-center mt-60">
                <h1 className="font-jetbrains text-4xl text-center font-bold tracking-wide">
                  Welcome to GoalKeeper{" "}
                  <span className="block">Add Your Daily Goals</span>
                </h1>
              </div>
            )}
          </div>
          <div className="absolute bottom-16 right-18">
            <Alert
              open={openAlert}
              message={alertMessage as string}
              onClose={handleCloseAlert}
            />
          </div>
        </div>
      </Background>
    </>
  );
};

export default Dashboard;
