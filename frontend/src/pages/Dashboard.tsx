import NavBar from "../components/NavBar";
import GoalCard from "../components/GoalCard";
import Background from "../components/Background";
import { useEffect, useState } from "react";
import BACKEND_URL from "../config";
import axios from "axios";

interface GoalTypes {
  _id: string;
  title: string;
  description: string;
  isCompleted: boolean;
}

const Dashboard = () => {
  const [goals, setGoals] = useState<GoalTypes[]>([]);

  const getGoals = async () => {
    const token = localStorage.getItem("token");
    const response = await axios.get(`${BACKEND_URL}/api/v1/goal/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(response.data);
    if (response) {
      setGoals(response.data);
    }
  };

  useEffect(() => {
    getGoals();
  }, []);

console.log(goals);
  return (
    <>
      <Background>
        <div className="w-[50%] mx-auto">
          <NavBar />
          <div className="w-full">
            {goals.map(({ _id, title, description, isCompleted, }) => (
              <GoalCard
                key={_id}
                _id={_id}
                title={title}
                description={description}
                isCompleted={isCompleted}
              />
            ))}
          </div>
        </div>
      </Background>
    </>
  );
};

export default Dashboard;
