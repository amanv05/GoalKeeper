interface buttonProps {
  onclick?: () => void;
}

const AddGoalButton = (props: buttonProps) => {
  return (
    <button className="bg-amber-300 rounded-md border-2 px-10 py-3 shadow-[2px_2px_0px_0px_#000000] cursor-pointer hover:shadow-[1px_1px_0px_0px_#000000] hover:bg-amber-300 font-jetbrains font-bold" onClick={props.onclick}>
    Add Goals</button>
  )
}

export default AddGoalButton
