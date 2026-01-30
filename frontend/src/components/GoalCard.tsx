interface GoalCardProps {
  _id: string;
  title: string;
  description: string;
  onDelete: (id: string) => void;
  onUpdate: (id: string) => void;
}

import ToggleButton from "./ToggleButton";
import Button from "./Button";
import { useState } from "react";

const GoalCard = ({
  _id,
  title,
  description,
  onDelete,
  onUpdate,
}: GoalCardProps) => {

  const [isCompleted, setIsCompleted] = useState<boolean>(false);


  return (
    <div className="flex items-center w-full mx-auto h-20 p-4 bg-white rounded-md border-2 shadow-[2px_2px_0px_0px_#000000] mb-4 hover:shadow-[1px_1px_0px_0px_#000000]">
      <div className="flex items-center justify-between">
        <ToggleButton isCompleted={isCompleted} onclick={() => setIsCompleted((x) => !x)} />
        <div className="pl-6">
          <h2 className="font-bold font-jetbrains truncate">{title}</h2>
          <p className="font-jetbrains truncate">{description}</p>
        </div>
        <div className="flex items-center justify-center gap-4 fixed ml-132">
          <Button text={"Update"} onclick={() => onUpdate(_id)}></Button>
          <Button text={"Delete"} onclick={() => onDelete(_id)}></Button>
        </div>
      </div>
    </div>
  );
};

export default GoalCard;
