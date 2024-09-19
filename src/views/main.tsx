import Benefits from "@/components/benefits/Benefits";
import ChooseYourName from "@/components/choose/ChooseYourName";
import MainBlock from "@/components/main/MainBlock";
import { UserData } from "@/utils/types";

function MainPage({ namesData }: { namesData: UserData[] }) {
  return (
    <div className="pb-[37px] md:pb-[93px]">
      <MainBlock />
      <Benefits />

      <section className="text-blue title2 text-center">
        Millions of people trust us!
      </section>

      <ChooseYourName data={namesData} />
    </div>
  );
}

export default MainPage;
