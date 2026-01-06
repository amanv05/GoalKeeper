import AddGoalButton from "./AddGoalButton";

const NavBar = () => {
  return (
    <div className="flex justify-between items-center w-full mx-auto h-20 p-8 bg-white rounded-md border-2 shadow-[2px_2px_0px_0px_#000000] mb-8">
      <h1 className="font-chewy text-3xl text-amber-400 cursor-pointer">
        GoalKeeper
      </h1>
      <AddGoalButton />
    </div>
  );
};

export default NavBar;
