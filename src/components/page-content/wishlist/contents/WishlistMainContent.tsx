import House from "@/assets/images/house.png";
import Listing from "@/components/listing/listing.component";

const WishlistMainContent = () => {
  return (
    <section className="flex flex-col gap-4 mt-2 md:mt-[2.5rem] md:grid grid-cols-3 md:gap-8 lg:gap-[3.5rem] ">
      {Array(6)
        .fill(mockWishlist)
        .map((items, i) => (
          <Listing key={i} {...items} />
          // <WishlistCard {...items} key={`waitlist-${i + 1}`} />
        ))}
    </section>
  );
};

export default WishlistMainContent;

const mockWishlist = {
  title: "Jacob Mews Skypoint",
  image: House,
  images: [House, House, House, House],
  rating: 4.6,
  reviews: "18",
  bedrooms: 3,
  price: 100,
  guests: 5,
};
