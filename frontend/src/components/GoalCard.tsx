interface GoalCardProps {
  _id: string;
  title: string;
  description: string;
  isCompleted: boolean;
  onDelete: (id: string) => void;
  onUpdate: (id: string) => void;
  onToggle: (id: string, isCompleted: boolean) => void;
}

import ToggleButton from "./ToggleButton";
import Button from "./Button";

const GoalCard = ({
  _id,
  title,
  description,
  isCompleted,
  onDelete,
  onUpdate,
  onToggle,
}: GoalCardProps) => {
  return (
    <div className="flex items-center justify-between w-full mx-auto h-20 pl-4 pr-8 bg-white rounded-md border-2 shadow-[2px_2px_0px_0px_#000000] mb-4 hover:shadow-[1px_1px_0px_0px_#000000]">
      <div className="flex items-center justify-center">
        <ToggleButton
          isCompleted={isCompleted}
          onclick={() => onToggle(_id, !isCompleted)}
        />
        <div className="pl-6">
          <h2 className="font-bold font-jetbrains truncate">{title}</h2>
          <p className="font-jetbrains truncate">{description}</p>
        </div>
      </div>
      <div className="flex items-center justify-center gap-4">
        <Button text={"Update"} onclick={() => onUpdate(_id)}></Button>
        <Button text={"Delete"} onclick={() => onDelete(_id)}></Button>
      </div>
    </div>
  );
};

export default GoalCard;
