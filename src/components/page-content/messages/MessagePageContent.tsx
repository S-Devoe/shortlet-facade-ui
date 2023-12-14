"use client";
import Container from "@/components/container/Container";
import PageHeader from "@/components/headers/PageHeader";
import MessageSection from "./section/MessageSection";
import { useEffect, useState } from "react";
import EmptyPage from "@/components/empty-state/EmptyPage";
import MessagingSvg from "@/components/charcters/MessagingSvg";

const MessagePageContent = () => {
  const [emptyState, setEmptyState] = useState(true);

  // to temporarily show the empty state for 3.5s
  useEffect(() => {
    setTimeout(() => {
      setEmptyState(false);
    }, 3500);
  }, []);

  return (
    <Container>
      <PageHeader
        header="Messages"
        body="Hello Benjamin, here are your shortlet messages so far"
      />

      {emptyState ? (
        <EmptyPage
          icon={<MessagingSvg className="mt-[5.95rem]" />}
          title="No messages yet!"
          body="You have no messages yet, your messages will appear here when you contact a host"
          btnText="Start a search now"
          showBtn={false}
        />
      ) : (
        <MessageSection />
      )}
    </Container>
  );
};

export default MessagePageContent;
