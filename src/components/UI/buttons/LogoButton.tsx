import Logo from "../logo/Logo";

function LogoButton() {
  return (
    <button className="flex items-center gap-0.5 font-semibold text-md text-black">
      <Logo /> VPN
    </button>
  );
}

export default LogoButton;
