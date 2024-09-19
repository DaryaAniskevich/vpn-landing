type BlueButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
};

function BlueButton({ children, onClick, className = "" }: BlueButtonProps) {
  return (
    <button
      className={`${className} bg-blue font-semibold text-white text-sm leading-[18px] px-[26px] py-[11px] rounded-3xl`}
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default BlueButton;
