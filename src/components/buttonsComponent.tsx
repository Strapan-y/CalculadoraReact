type ButtonsProps = {
  onClick: (value: string) => void;
};

const Buttons = ({ onClick }: ButtonsProps) => {
  const buttons = [
    "C", "(", ")", "/",
    "7", "8", "9", "*",
    "4", "5", "6", "-",
    "1", "2", "3", "+",
    "0", ".", "=", 
  ];

  return (
    <div className="grid grid-cols-4 gap-3 mt-4">
      {buttons.map((btn) => (
        <button
          key={btn}
          onClick={() => onClick(btn)}
          className="p-4 text-xl rounded-lg hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600"
        >
          {btn}
        </button>
      ))}
    </div>
  );
};

export default Buttons;
