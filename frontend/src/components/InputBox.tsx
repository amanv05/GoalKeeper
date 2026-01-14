interface InputBoxProps {
  ref?: any;
  placeholder: string;
}

const InputBox = ({ ref, placeholder }: InputBoxProps) => {
  return (
    <input
      ref={ref}
      placeholder={placeholder}
      className="focus:outline-none focus:shadow-[1px_1px_0px_0px_#000000]  font-jetbrains border-2 border-black px-4 w-60 h-10 rounded-md bg-white shadow-[2px_2px_0px_0px_#000000] hover:shadow-[1px_1px_0px_0px_#000000]"
    ></input>
  );
};

export default InputBox;
