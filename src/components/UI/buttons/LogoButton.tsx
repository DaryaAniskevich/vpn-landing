import Logo from "../logo/Logo";

function LogoButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      className="flex items-center gap-0.5 font-semibold text-md text-black"
      type="button"
      onClick={onClick}
    >
      <Logo /> VPN
    </button>
  );
}

export default LogoButton;
