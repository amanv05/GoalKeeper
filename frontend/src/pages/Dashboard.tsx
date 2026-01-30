import NavBar from "../components/NavBar";
import GoalCard from "../components/GoalCard";
import Background from "../components/Background";
import AddGoalModal from "../modals/AddGoalModal";
import UpdateGoalModal from "../modals/UpdateGoalModal";
import { useEffect, useRef, useState } from "react";
import BACKEND_URL from "../config";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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
  const [goalID, setGoalID] = useState<string>();
  const titleRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLInputElement>(null);
  const updatedTitle = useRef<HTMLInputElement>(null);
  const updatedDescription = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

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

  const deleteGoals = async (id: string) => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("User not signed in");
      navigate("/");
    }
    await axios.delete(`${BACKEND_URL}/api/v1/goal/delete/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    getGoals();
  };

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
    alert("Logged out successfully");
  };

  const createGoal = async () => {
    const title = titleRef.current?.value;
    const description = descriptionRef.current?.value;
    const token = localStorage.getItem("token");

    if (!token) {
      alert("User not signed in");
      return;
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
    }
  };

  const openUpdateModal = (id: string) => {
    setGoalID(id);
    setUpdateGoal((x) => !x);
  };

  const goalUpdation = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("User not signed in");
      navigate("/");
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
      setUpdateGoal((x) => !x);
    }
  };

  return (
    <>
      <Background>
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
          ) : (
            <div className="w-full">
              {Array.isArray(goals) &&
                goals.map(({ _id, title, description }) => (
                  <GoalCard
                    key={_id}
                    _id={_id}
                    title={title}
                    description={description}
                    onDelete={deleteGoals}
                    onUpdate={openUpdateModal}
                  />
                ))}
            </div>
          )}
        </div>
      </Background>
    </>
  );
};

export default Dashboard;
