import BookingCard from "../components/BookingCard";

const BookedBookings = () => {
  return (
    <>
      {Array(9)
        .fill("")
        .map((_, i) => (
          <BookingCard status="Booked" key={`i-${i + 1}`} />
        ))}
    </>
  );
};

export default BookedBookings;
