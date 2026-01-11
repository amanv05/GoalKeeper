import NavBar from "../components/NavBar";
import GoalCard from "../components/GoalCard";
import Background from "../components/Background";

const Dashboard = () => {
  return (
    <>
    <Background>
    <div className="w-[50%] mx-auto">
      <NavBar />
      <div className="flex gap-4 w-full flex-wrap h-full">
      <GoalCard />
      <GoalCard />
      <GoalCard />
      <GoalCard />
      </div>
    </div>
    </Background>
      </>
)
}

export default Dashboard
