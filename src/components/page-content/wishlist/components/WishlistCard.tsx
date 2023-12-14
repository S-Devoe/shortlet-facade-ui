import FourCirclesIcon from "@/components/icons/FourCirclesIcon";
import LikedIcon from "@/components/icons/LikedIcon";
import RatingStar from "@/components/icons/RatingStar";
import Image, { StaticImageData } from "next/image";

interface Props {
  title: string;
  image: StaticImageData | string;
  rating: number;
  reviews: number | string;
  bedrooms: number | string;
  guests: number | string;
}
const WishlistCard = (props: Props) => {
  return (
    <div className="w-full border rounded-[0.5rem] md:rounded-[1rem] border-gray-seven">
      <div className="relative h-[12rem] w-full ">
        <Image
          fill
          src={props.image}
          alt="img"
          sizes="100%"
          className="rounded-t-[0.5rem] md:rounded-t-[1rem] "
        />
        <button className="z-[4] flex items-center justify-center absolute top-4 right-4 h-[1.5rem] w-[1.5rem] rounded-full bg-[#231F203D] ">
          <LikedIcon />
        </button>
        <div className="z-[4] flex items-center justify-center px-[0.375rem] py-[0.25rem] absolute bg-white w-fit rounded-[0.38rem] bottom-4 right-4 text-[0.875rem]  ">
          <h4 className="text-[0.75rem] font-[500] ">
            $ 100<span className="text-gray-seven-five"> / night</span>
          </h4>
        </div>

        <div className="z-[4] absolute bottom-4 left-4">
          <FourCirclesIcon />
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-black-six font-[700] text-[1rem] leading-[1.25rem]">
          {props.title}
        </h3>
        <div className="mt-1 text-[0.875rem] leading-[1rem] font-[400] flex items-center gap-[0.95rem] ">
          <div className="flex items-center gap-[0.25rem] text-black-six">
            <RatingStar />
            <h4>{props.rating}</h4>
            <h4>({props.reviews} reviews)</h4>
          </div>

          <h4 className="text-gray-seven-five">
            {props.guests} guests • {props.bedrooms} Bedrooms
          </h4>
        </div>
      </div>
    </div>
  );
};

export default WishlistCard;
