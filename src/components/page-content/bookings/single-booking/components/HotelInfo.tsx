import RatingStar from "@/components/icons/RatingStar";
import "./style.scss";
import CircleSvg from "@/components/icons/CircleSvg";
import Button from "@/components/button/button-cva";
import LikeStrokeIcon from "@/components/icons/LikeStrokeIcon";
import SendStrokeIcon from "@/components/icons/SendStrokeIcon";
import Image from "next/image";
import Hotel1 from "@/assets/images/hotel-img1.png";
import Hotel2 from "@/assets/images/hotel-img2.png";
import Hotel3 from "@/assets/images/hotel-img3.png";
import Hotel4 from "@/assets/images/hotel-img4.png";
import Hotel5 from "@/assets/images/hotel-img5.png";

const HotelInfo = () => {
  return (
    <section className="w-full">
      <div className="w-full flex flex-col gap-3 md:flex-row justify-between text-center">
        <div className="flex flex-col">
          <h1 className="text-[2.5rem] text-start font-bold text-primary font-serif  ">
            Eko Atlantic Shortstays
          </h1>

          <div className="w-full flex items-center flex-wrap gap-4 text-gray font-normal text-[0.875rem] ">
            <div className="flex gap-1 w-fit items-center">
              <RatingStar />
              <p className="text-[1rem]">4.8</p>
            </div>
            <p>18 reviews</p>
            <p>Lagos, Nigeria</p>
            <p>6 guests</p>
            <CircleSvg />
            <p>3 Bedrooms</p>
          </div>
        </div>
        <div className="flex items-center gap-4 ">
          <Button
            text="Wishlist"
            variant="orangeOutline"
            icon={<LikeStrokeIcon />}
            className="gap-[0.65rem] text-[1rem] font-medium "
          />

          <Button
            text="Share"
            variant="outline"
            icon={<SendStrokeIcon />}
            className="gap-[0.65rem] text-[1rem] font-medium "
          />
        </div>
      </div>
      <Button
        text="View Host Profile"
        className="flex flex-row-reverse w-fit gap-2 p-4 text-[1rem] my-[1.5rem] font-medium"
        icon={
          <div className="relative rounded-full h-[2rem] w-[2rem] border-[4px] border-white  ">
            <Image
              src="/profile/Avatar.png"
              alt="img"
              fill
              sizes="100%"
              className="rounded-full"
            />
          </div>
        }
      />
      <div className="hidden w-full lg:grid grid-cols-2 gap-[1.125rem] ">
        <div className="h-[35rem] relative">
          <Image
            src={Hotel1}
            alt="img"
            fill
            sizes="100%"
            className="rounded-l-[1rem]"
          />
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-[1.125rem]">
          <div className="relative">
            <Image src={Hotel2} alt="img" fill sizes="100%" />
          </div>
          <div className="relative">
            <Image
              src={Hotel4}
              alt="img"
              fill
              sizes="100%"
              className="rounded-tr-[1rem]"
            />
          </div>
          <div className="relative">
            <Image src={Hotel3} alt="img" fill sizes="100%" />
          </div>

          <div className="relative">
            <Image
              src={Hotel5}
              alt="img"
              fill
              sizes="100%"
              className="rounded-br-[1rem]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HotelInfo;
