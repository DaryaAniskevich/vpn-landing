import BenefitItem from "./BenefitItem";
import access from "@/assets/images/ben_access.svg";
import speed from "@/assets/images/ben_speed.svg";
import location from "@/assets/images/ben_location.svg";
import blocked from "@/assets/images/ben_blocked.svg";

const benefits = [
  {
    img: access,
    titleOrange: "Unlimited",
    titleBlue: "access to content",
    description:
      "Enjoy unlimited bandwidth to stay connected to the world's best shows, apps, and games!",
  },
  {
    img: speed,
    titleOrange: "Flashing",
    titleBlue: "connecting speed",
    description:
      "VPN Lumos offers unlimited bandwidth for faster loading and no buffering!",
  },
  {
    img: location,
    titleOrange: "Hide ",
    titleBlue: "your location",
    description:
      "Get your own unique IP for added security and access to restricted sites, apps, and services!",
  },
  {
    img: blocked,
    titleOrange: "Bypass",
    titleBlue: "blocked sites",
    description: "Access any website safely and anonymously!",
  },
];

function Benefits() {
  return (
    <section className="px-4 grid grid-cols-1 md:grid-cols-2 md:gap-y-1 md:gap-x-8 my-10 md:my-[72px]">
      {benefits.map((item) => (
        <BenefitItem key={item.titleBlue} data={item} />
      ))}
    </section>
  );
}

export default Benefits;
