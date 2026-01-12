import { CheckIcon } from "lucide-react";
import { useState } from "react";

interface toggleButtonProps {
  isCompleted: boolean,
}

const ToggleButton = (props: toggleButtonProps) => {
  const [isCompleted, setIsCompleted] = useState(props.isCompleted);

  const HandleToggle = () => {
    setIsCompleted((x) => !x);
  };

  return (
    <div
      onClick={HandleToggle}
      className="flex justify-center bg-amber-300 items-center w-14 h-14 border-2 rounded-md cursor-pointer shadow-[2px_2px_0px_0px_#000000] hover:shadow-[1px_1px_0px_0px_#000000]"
    >
      {isCompleted && <CheckIcon size={40} />}
    </div>
  );
};

export default ToggleButton;
