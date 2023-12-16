import BookingCard from "../components/BookingCard";

const PendingBookings = () => {
  return (
    <>
      {Array(9)
        .fill("")
        .map((_, i) => (
          <BookingCard status="Pending" key={`i-${i + 1}`} />
        ))}
    </>
  );
};

export default PendingBookings;
