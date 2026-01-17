import Button from "./Button";

const NavBar = () => {
  return (
    <div className="flex justify-between items-center w-full mx-auto h-20 p-8 bg-white rounded-md border-2 shadow-[2px_2px_0px_0px_#000000] hover:shadow-[1px_1px_0px_0px_#000000] mb-4">
      <h1 className="font-jetbrains font-extrabold  text-3xl text-black cursor-pointer">
        GoalKeeper
      </h1>
      <div className="flex gap-4">
        <Button  text={"Add"} />
        <Button text={"Logout"} />
      </div>
    </div>
  );
};

export default NavBar;
