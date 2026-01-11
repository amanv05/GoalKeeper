interface GoalCardProps {
  title?: string;
  descrition?: string;
  deadline?: string;
  iscompleted?: boolean;
}

import { Pen, Trash2 } from "lucide-react";
import ToggleButton from "./ToggleButton";



const GoalCard = (props: GoalCardProps) => {
  return (
    <div className="bg-white border-2 rounded-2xl w-60 h-40 shadow-[2px_2px_0px_0px_#000000] p-4 flex flex-col items-start  cursor-poiniter hover:hover:shadow-[1px_1px_0px_0px_#000000]">
      <div className="flex justify-between gap-15 mb-1">
        <h2 className="font-bold text-black font-jetbrains">
          Go to Gym {props.title}
        </h2>
        <div className="flex justify-center items-center gap-2 mb-1">
        <button className="cursor-pointer"><Pen /></button>
        <button className="cursor-pointer"><Trash2  size={25}/></button>
        </div>
      </div>
      <p className="text-black text-sm font-jetbrains">
        Go to Gym at 5PM Nahi Gaya toh tu Gay h{props.descrition}
      </p>
      <p className="text-black text-sm font-jetbrains">
        Deadline: 25 Dec 2026{props.deadline}
      </p>
      <ToggleButton />
    </div>
  );
};

export default GoalCard;
