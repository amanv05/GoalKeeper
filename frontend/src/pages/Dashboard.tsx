import NavBar from "../components/NavBar";
import GoalCard from "../components/GoalCard";
import Background from "../components/Background";
import { useEffect, useState } from "react";
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
  const navigate = useNavigate();

  const getGoals = async () => {
    const token = localStorage.getItem("token");
    const response = await axios.get(`${BACKEND_URL}/api/v1/goal/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(response.data.data);
    if (response) {
      setGoals(response.data.data);
    }
  };

  useEffect(() => {
    getGoals();
  }, []);


  const deleteGoals = async (id: string) => {
    const token = localStorage.getItem("token");
    if(!token) {
      alert("User not signed in");
      navigate("/")
    }
    await axios.delete(`${BACKEND_URL}/api/v1/goal/delete/${id}`,{
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    getGoals();
  }

  return (
    <>
      <Background>
        <div className="w-[50%] mx-auto">
          <NavBar />
          <div className="w-full">
            {Array.isArray(goals) && goals.map(({ _id, title, description, isCompleted }) => (
              <GoalCard
                key={_id}
                _id={_id}
                title={title}
                description={description}
                isCompleted={isCompleted}
                onDelete={() => deleteGoals(_id)}
              />
            ))}
          </div>
        </div>
      </Background>
    </>
  );
};

export default Dashboard;
