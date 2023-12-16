import React from "react";
import BookingCard from "../components/BookingCard";

const AllBookings = () => {
  return (
    <>
      {Array(9)
        .fill("")
        .map((_, i) => (
          <BookingCard
            status={
              i % 2 === 0
                ? "Ongoing"
                : i % 3 === 0
                ? "Declined"
                : i % 5 === 0
                ? "Pending"
                : "Booked"
            }
            key={`i-${i + 1}`}
          />
        ))}
    </>
  );
};

export default AllBookings;
