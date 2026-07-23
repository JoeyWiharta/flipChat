import { Outlet } from "react-router";
import ConversationList from "../components/conversation-list";
import SplitInsetLayout from "@/components/shared/split-inset-layout";

const ChatSectionLayout = () => {
  return (
    <SplitInsetLayout side={<ConversationList />}>
      <Outlet />
    </SplitInsetLayout>
  );
};
export default ChatSectionLayout;
