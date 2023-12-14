import Image from "next/image";
import LikedIcon from "../icons/LikedIcon";
import FourCirclesIcon, { CircleIcon } from "../icons/FourCirclesIcon";
export interface ListingProps {
  id?: string | number;
  name: string;
  images: string[];
  price: number;
  rating: number;
  reviews: number;
  guests: number;
  bedrooms: number;
}

const Listing: React.FC<ListingProps> = ({
  id,
  name,
  images,
  price,
  rating,
  reviews,
  guests,
  bedrooms,
}) => {
  return (
    <div className="rounded-2xl overflow-hidden border border-gray-seven relative">
      <div className="overflow-hidden relative w-full h-48">
        <Image
          src={images[0]}
          alt={name}
          fill={true}
          style={{
            objectFit: "cover",
          }}
        />
        <div className="z-[4] absolute bottom-4 left-4">
          <span className="flex gap-1">
            {images.map((_, i) => (
              <CircleIcon key={i} />
            ))}
          </span>
        </div>
        <div className="z-[4] flex items-center justify-center px-1.5 py-1 absolute bg-white w-fit rounded-md bottom-4 right-4 text-sm  ">
          <h4 className="text-xs font-medium ">
            $ {price}
            <span className="text-gray-seven-five"> / night</span>
          </h4>
        </div>
      </div>
      <button className="z-[4] flex items-center justify-center absolute top-4 right-4 h-[1.5rem] w-[1.5rem] rounded-full bg-[#231F203D] ">
        <LikedIcon />
      </button>
      <div className="relative px-4 md:px-6 py-3 md:py-4">
        <h1 className="font-bold">{name}</h1>
        <div className="flex sm:block md:flex lg:block xl:flex gap-4 text-sm font-normal">
          <span className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="13"
              viewBox="0 0 14 13"
              fill="none"
            >
              <path
                d="M6.52447 0.463524C6.67415 0.00286841 7.32585 0.00286996 7.47553 0.463525L8.68386 4.18237C8.75079 4.38838 8.94277 4.52786 9.15938 4.52786H13.0696C13.554 4.52786 13.7554 5.14767 13.3635 5.43237L10.2001 7.73075C10.0248 7.85807 9.95149 8.08375 10.0184 8.28976L11.2268 12.0086C11.3764 12.4693 10.8492 12.8523 10.4573 12.5676L7.29389 10.2693C7.11865 10.1419 6.88135 10.1419 6.70611 10.2693L3.54267 12.5676C3.15081 12.8523 2.62357 12.4693 2.77325 12.0086L3.98157 8.28976C4.04851 8.08375 3.97518 7.85807 3.79994 7.73075L0.636495 5.43237C0.244639 5.14767 0.446028 4.52786 0.93039 4.52786H4.84062C5.05723 4.52786 5.24921 4.38838 5.31614 4.18237L6.52447 0.463524Z"
                fill="#060606"
              />
            </svg>
            {rating} ({reviews} reviews)
          </span>
          <span className="text-[#757D8A] text-end">
            {guests} guests • {bedrooms} bedrooms
          </span>
        </div>
      </div>
    </div>
  );
};

export default Listing;
