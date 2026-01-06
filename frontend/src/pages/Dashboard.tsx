import NavBar from "../components/NavBar";
import GoalCard from "../components/GoalCard";

const Dashboard = () => {
  return (
    <>
    <div className="w-[50%] mx-auto">
      <NavBar />
      <div className="flex gap-4 w-full flex-wrap h-full">
      <GoalCard />
      <GoalCard />
      <GoalCard />
      </div>
    </div>
     
      </>
)
}

export default Dashboard
