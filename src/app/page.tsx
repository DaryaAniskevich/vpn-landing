import Benefits from "@/components/benefits/Benefits";
import ChooseYourName from "@/components/choose/ChooseYourName";
import MainBlock from "@/components/main/MainBlock";
import { API_URL } from "@/utils/constants";

const fetchData = async () => {
  const response = await fetch(`${API_URL}?results=10`);

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await response.json();

  return data;
};

export default async function Home() {
  const namesData = await fetchData();

  return (
    <div className="pt-[13px] md:pt-[75px] pb-[37px] md:pb-[93px]">
      <MainBlock />
      <Benefits />

      <section className="text-blue title2 text-center">
        Millions of people trust us!
      </section>

      <ChooseYourName data={namesData?.results ?? []} />
    </div>
  );
}
