import Image from "next/image";
import location from "@/assets/images/location.svg";
import servers from "@/assets/images/servers.svg";
import { Fragment } from "react";

type InfoData = {
  number: string;
  text: string;
  img: string;
};

const info = [
  {
    number: "50",
    text: "Locations",
    img: location,
  },
  {
    number: "1000",
    text: "Servers",
    img: servers,
  },
];

function InfoItem({ data }: { data: InfoData }) {
  const { number, text, img } = data;
  return (
    <div className="flex items-center gap-[13px]">
      <Image src={img} alt={text} width={24} height={24} />
      <div className="flex flex-col items-start">
        <span className="title2 text-black">{number}+</span>
        <span className="capture">{text}</span>
      </div>
    </div>
  );
}

function Info() {
  return (
    <div className="mt-[24px] bg-white shadow-card py-[15px] px-[42px] rounded-2xl">
      <div className="max-w-[415px] w-full flex items-center justify-between mx-auto">
        {info.map((item, index, array) => (
          <Fragment key={item.text}>
            <InfoItem data={item} />
            {index !== array.length - 1 && (
              <div className="w-[1px] h-8 bg-gray" />
            )}
          </Fragment>
        ))}
      </div>
    </div>
  );
}
export default Info;
