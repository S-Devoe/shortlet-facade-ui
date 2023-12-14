"use client";
import Container from "@/components/container/Container";
import EmptyPage from "@/components/empty-state/EmptyPage";
import PageHeader from "@/components/headers/PageHeader";
import { useEffect, useState } from "react";
import WaitllistMainContent from "./contents/WishlistMainContent";
import WaitlistCharacterSvg from "@/components/charcters/WaitlistCharacterSvg";

const WishlistContent = () => {
  const [emptyState, setEmptyState] = useState(true);

  // to temporarily show the empty state for 3.5s
  useEffect(() => {
    setTimeout(() => {
      setEmptyState(false);
    }, 3500);
  }, []);

  return (
    <Container className="h-full w-full">
      <PageHeader
        header="My Wishlist"
        body="Hello Benjamin, here are the apartments you wish to book in the future"
      />
      {emptyState ? (
        <EmptyPage
          icon={<WaitlistCharacterSvg className="mt-[5.95rem]" />}
          title="Nothing here yet!"
          body="You have not saved any places in your wishlist. You can add some place
        to your wish list from search home."
          btnText="Start a search now"
        />
      ) : (
        <WaitllistMainContent />
      )}
    </Container>
  );
};

export default WishlistContent;
