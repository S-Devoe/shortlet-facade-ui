import BookingCard from "../components/BookingCard";

const OngoingBookings = () => {
  return (
    <>
      {Array(9)
        .fill("")
        .map((_, i) => (
          <BookingCard status="Ongoing" key={`i-${i + 1}`} />
        ))}
    </>
  );
};

export default OngoingBookings;
