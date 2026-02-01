import { useNavigate } from "react-router-dom";
import Button from "./Button";

interface NavBarProps {
  addFunction: () => void;
  logoutFunction: () => void;
}

const NavBar = ({addFunction, logoutFunction}: NavBarProps) => {
  const navigate = useNavigate();


  return (
    <div className="flex justify-between items-center w-full mx-auto h-20 p-8 bg-white rounded-md border-2 shadow-[2px_2px_0px_0px_#000000] hover:shadow-[1px_1px_0px_0px_#000000] mb-4">
      <h1 className="font-jetbrains font-extrabold  text-3xl text-black cursor-pointer">
        GoalKeeper
      </h1>
      <div className="flex gap-4">
        <Button onclick={() => addFunction()}  text={"Add"} />
        <Button onclick={() => logoutFunction()} text={"Logout"} />
      </div>
    </div>
  );
};

export default NavBar;
