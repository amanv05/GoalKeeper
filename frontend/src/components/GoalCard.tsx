interface GoalCardProps {
  title: string;
  description: string;
  isCompleted: boolean;
  onDelete: (id: string) => void;
  onUpdate: (id: string) => void;
}

import ToggleButton from "./ToggleButton";
import Button from "./Button";

const GoalCard = ({
  title,
  description,
  isCompleted,
  onDelete,
  onUpdate,
}: GoalCardProps) => {
  return (
    <div className="flex items-center w-full mx-auto h-20 p-4 bg-white rounded-md border-2 shadow-[2px_2px_0px_0px_#000000] mb-4 hover:shadow-[1px_1px_0px_0px_#000000]">
      <div className="flex items-center justify-between">
        <ToggleButton isCompleted={isCompleted} />
        <div className="pl-6 pr-23">
          <h2 className="font-bold font-jetbrains truncate">{title}</h2>
          <p className="font-jetbrains truncate">{description}</p>
        </div>
        <div className="flex items-center justify-center gap-4">
          <Button placeholder={"Update"} onclick={onUpdate}></Button>
          <Button placeholder={"Delete"} onclick={onDelete}></Button>
        </div>

      </div>
    </div>
  );
};

export default GoalCard;
