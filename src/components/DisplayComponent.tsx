type DisplayProps = {
  value: string;
};

const Display = ({ value }: DisplayProps) => {
  return (
    <div className="bg-black text-white text-4xl p-4 rounded-lg h-20 flex items-center justify-end font-mono shadow-inner">
      {value}
    </div>
  );
};

export default Display;
