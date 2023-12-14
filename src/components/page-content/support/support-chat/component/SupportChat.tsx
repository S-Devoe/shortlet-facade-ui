import ChatSection from "@/components/chat/ChatSection";
import ExportIcon from "@/components/icons/ExportIcon";

const SupportChat = () => {
  return (
    <ChatSection
      header="Support Chat"
      chatIcon={
        <span>
          <ExportIcon className="text-primary" />
        </span>
      }
    />
  );
};

export default SupportChat;
