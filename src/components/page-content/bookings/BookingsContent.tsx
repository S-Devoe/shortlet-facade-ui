"use client";
import WaitlistCharacterSvg from "@/components/charcters/WaitlistCharacterSvg";
import Container from "@/components/container/Container";
import EmptyPage from "@/components/empty-state/EmptyPage";
import PageHeader from "@/components/headers/PageHeader";
import { useEffect, useState } from "react";
import BookingsSection from "./sections/BookingsSection";

const BookingsContent = () => {
  const [emptyState, setEmptyState] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setEmptyState(false);
    }, 3500);
  }, []);

  return (
    <Container className="h-full w-full">
      <PageHeader
        header="My Bookings"
        body="Hello Benjamin, here are your shortlet bookings so far"
      />
      {emptyState ? (
        <EmptyPage
          body="You have not made any reservations yet!"
          title="Nothing here yet!"
          btnLink=""
          btnText="Make a reservation now"
          icon={<WaitlistCharacterSvg className="mt-[5.95rem]" />}
        />
      ) : (
        <BookingsSection />
      )}
    </Container>
  );
};

export default BookingsContent;
