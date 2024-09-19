import Image from "next/image";
import style from './BenefitItem.module.css'

type BenefitItemProps = {
  data: {
    img: string;
    titleOrange: string;
    titleBlue: string;
    description: string;
  };
};

function BenefitItem({ data }: BenefitItemProps) {
  const { img, titleOrange, titleBlue, description } = data;
  return (
    <div className={`${style.benefit} text-center py-4 border-t border-gray`}>
      <div className="mb-2 flex row gap-[13px] items-center justify-center before:content-star before:flex before:items-center before:w-[14px] before:h-[14px]  after:content-star after:flex after:items-center  after:w-[14px] after:h-[14px] ">
        <Image src={img} alt={titleOrange} width={50} height={50} />
      </div>

      <h2 className="mb-2 title1 flex flex-col items-center font-bold uppercase">
        <span className="text-orange">{titleOrange}</span>
        <span className="text-blue">{titleBlue}</span>
      </h2>
      <p className="font-semibold">{description}</p>
    </div>
  );
}

export default BenefitItem;
