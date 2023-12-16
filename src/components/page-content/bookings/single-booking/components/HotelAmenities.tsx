import TaskSquareIcon from "@/components/icons/TaskSquareIcon";
import "./style.scss";
import Button from "@/components/button/button-cva";
const HotelAmenities = () => {
  return (
    <section className="w-full">
      <h3 className="booking-mini-header">Amenities</h3>
      <div className="mt-4 flex flex-col gap-4 ">
        {amenities.map((amenity, i) => (
          <div
            key={`amenity-${i + 1}`}
            className="flex items-center gap-2 text-[#757D8A] text-[1rem] font-normal "
          >
            <span className="w-[1.5rem]">
              <TaskSquareIcon />
            </span>
            <p>{amenity}</p>
          </div>
        ))}
      </div>
      <Button text="Show all amenities" variant="orangeOutline" className="w-fit mt-5 px-[2.5rem]" />
    </section>
  );
};

export default HotelAmenities;

const amenities = [
  "Kitchen",
  "Free Wi-Fi",
  "Parking",
  "Air Conditioning",
  "Private Pool",
  "TV",
];
