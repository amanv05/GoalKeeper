interface GoalCardProps {
    title?: string;
    descrition?: string;
    deadline?: string;
    iscompleted?: boolean;
}

const GoalCard = (props: GoalCardProps) => {
  return (
    <div className="bg-white border-2 rounded-2xl w-60 h-40 shadow-[2px_2px_0px_0px_#000000] p-6 flex flex-col justify-center cursor-poiniter hover:hover:shadow-[1px_1px_0px_0px_#000000]">
        <h2 className="font-bold text-black font-jetbrains">Go to Gym {props.title}</h2>
        <p className="text-black text-sm font-jetbrains">Go to Gym at 5PM Nahi Gaya toh tu Gay h{props.descrition}</p>
        <p className="text-black text-sm font-jetbrains">Deadline: 25 Dec 2026{props.deadline}</p>
    </div>
  )
}

export default GoalCard
