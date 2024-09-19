import Benefits from "@/components/benefits/Benefits";
import MainBlock from "@/components/main/MainBlock";

export default function Home() {
  return (
    <div className="pt-[13px] md:pt-[75px] pb-[37px] md:pb-[93px]">
      <MainBlock />
      <Benefits />

      <section className="text-blue title2 font-bold text-center">Millions of people trust us!</section>
    </div>
  );
}
