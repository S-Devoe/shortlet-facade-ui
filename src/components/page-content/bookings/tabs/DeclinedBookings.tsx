import BookingCard from "../components/BookingCard";

const DeclinedBookings = () => {
  return (
    <>
      {Array(9)
        .fill("")
        .map((_, i) => (
          <BookingCard status="Declined" key={`i-${i + 1}`} />
        ))}
    </>
  );
};

export default DeclinedBookings;
