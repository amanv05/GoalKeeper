interface ButtonProps {
  onclick: () => void;
  placeholder: string;
}

const Button = ({ onclick, placeholder }: ButtonProps) => {
  return (
    <button
      onClick={onclick}
      className="flex justify-center bg-amber-300 items-center w-20 h-10 border-2 rounded-md cursor-pointer shadow-[2px_2px_0px_0px_#000000] hover:shadow-[1px_1px_0px_0px_#000000] font-semibold font-jetbrains"
    >
      {placeholder}
    </button>
  );
};

export default Button;
