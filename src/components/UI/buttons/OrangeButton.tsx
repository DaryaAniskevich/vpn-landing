export type OrangeButtonProps = {
  onClick: () => void;
  children?: React.ReactNode;
  className?: string;
};
function OrangeButton({
  children = "Get VPN",
  onClick,
  className = "",
}: OrangeButtonProps) {
  return (
    <button
      className={`${className} bg-orange hover:bg-orangeLight text-white px-[26px] py-[17px] rounded-2xl title2 min-w-full md:min-w-[396px]`}
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default OrangeButton;
