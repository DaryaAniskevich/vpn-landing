import Logo from "../logo/Logo";

function LogoButton() {
  return (
    <button className="flex items-center gap-1 font-semibold text-md text-black">
      <Logo /> VPN
    </button>
  );
}

export default LogoButton;
