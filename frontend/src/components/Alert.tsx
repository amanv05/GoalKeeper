import Button from "./Button";

interface AlertProps {
  open: boolean;
  message: string;
  onClose: () => void;
}

const Alert = ({ open, message, onClose }: AlertProps) => {
  if (!open) {
    return null;
  }

  return (
    <div className="flex justify-between items-center mx-auto w-sm h-20 p-8 bg-white rounded-md border-2 shadow-[2px_2px_0px_0px_#000000] hover:shadow-[1px_1px_0px_0px_#000000] mb-4">
      <h2 className="font-bold font-jetbrains text-clip">{message}</h2>
      <div className="flex">
        <Button onclick={() => onClose} text={"Close"} />
      </div>
    </div>
  );
};

export default Alert;
