import Image from "next/image";
import "./style.scss";
import Map from "@/assets/images/mock-map.png";
import Button from "@/components/button/button-cva";
const HotelLocation = () => {
  return (
    <section className="">
      <h3 className="booking-mini-header">Location</h3>
      <p className="text-gray-five font-[400] text-[1rem] ">
        12 Cowries Avenue, Victoria Island, Lagos
      </p>
      <div className="relative h-[11rem] w-full mt-2 ">
        <Image src={Map} alt="map" fill sizes="100%" />
      </div>
      <div className="w-full md:max-w-[28rem] flex items-center justify-between gap-5 mt-[2.5rem]  ">
        <Button text="Contact Host" />
        <Button text="Cancel Booking" variant="orangeOutline" />
      </div>
    </section>
  );
};

export default HotelLocation;
