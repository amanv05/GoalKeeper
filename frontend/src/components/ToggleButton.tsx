import { CheckIcon } from "lucide-react";

interface toggleButtonProps {
  isCompleted: boolean;
  onclick: () => void;
}

const ToggleButton = (props: toggleButtonProps) => {
  return (
    <div
      onClick={props.onclick}
      className="flex justify-center bg-amber-300 items-center w-14 h-14 border-2 rounded-md cursor-pointer shadow-[2px_2px_0px_0px_#000000] hover:shadow-[1px_1px_0px_0px_#000000]"
    >
      {props.isCompleted && <CheckIcon size={40} />}
    </div>
  );
};

export default ToggleButton;
