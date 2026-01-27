interface GoalCardProps {
  _id: string;
  title: string;
  description: string;
  isCompleted: boolean;
  onDelete: (id: string) => void;
  onUpdate: () => void;
}

import ToggleButton from "./ToggleButton";
import Button from "./Button";
import { useState } from "react";

const GoalCard = ({
  _id,
  title,
  description,
  isCompleted,
  onDelete,
  onUpdate,
}: GoalCardProps) => {

  const [isChecked, setIsChecked] = useState(isCompleted);

  return (
    <div className="flex items-center w-full mx-auto h-20 p-4 bg-white rounded-md border-2 shadow-[2px_2px_0px_0px_#000000] mb-4 hover:shadow-[1px_1px_0px_0px_#000000]">
      <div className="flex items-center justify-between">
        <ToggleButton onclick={() => setIsChecked(x => !x)} isCompleted={isChecked} />
        <div className="pl-6 pr-23">
          <h2 className="font-bold font-jetbrains truncate">{title}</h2>
          <p className="font-jetbrains truncate">{description}</p>
        </div>
        <div className="flex items-center justify-center gap-4 fixed ml-132">
          <Button text={"Update"} onclick={() => onUpdate()}></Button>
          <Button text={"Delete"} onclick={() => onDelete(_id)}></Button>
        </div>
      </div>
    </div>
  );
};

export default GoalCard;
