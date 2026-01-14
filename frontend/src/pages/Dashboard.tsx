import NavBar from "../components/NavBar";
import GoalCard from "../components/GoalCard";
import Background from "../components/Background";


const Dashboard = () => {
  return (
    <>
    <Background>
    <div className="w-[50%] mx-auto">
      <NavBar />
      <div className="w-full">
      <GoalCard title={"Go to Gym"} description={"Go to gym daily nahi gaya toh tu Gay h"} isCompleted={false} />
    </div>
    </div>
    </Background>
      </>
)
}

export default Dashboard
