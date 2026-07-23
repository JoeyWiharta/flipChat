import { Link } from "react-router";
import { cn } from "@/lib/utils";
import { PATHS } from "@/constants/routes";
import { useParams } from "react-router";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";

const mockConversations = [
  { id: "1", name: "Design Team", lastMessage: "Sounds good, let's ship it 🚀" },
  { id: "2", name: "Alex Rivera", lastMessage: "The mockup looks great!" },
  { id: "3", name: "Sarah Chen", lastMessage: "Can we sync tomorrow?" },
];

const ConversationList = () => {
  const { conversationId } = useParams();

  return (
    <div className="flex h-full flex-col overflow-y-auto">
      <Card className="flex h-full flex-col overflow-y-auto">
        <CardHeader>
          <CardTitle>Chats</CardTitle>
        </CardHeader>
      </Card>

      <div className="border-b p-4">
        <h2 className="text-lg font-semibold">Chats</h2>
      </div>
      <nav className="flex flex-col gap-1 p-2">
        {mockConversations.map((c) => (
          <Link
            key={c.id}
            to={PATHS.APP.CHAT_CONVERSATION(c.id)}
            className={cn(
              "flex flex-col gap-0.5 rounded-lg p-3 transition-colors hover:bg-accent",
              conversationId === c.id && "bg-accent",
            )}
          >
            <span className="truncate text-sm font-semibold">{c.name}</span>
            <span className="truncate text-xs text-muted-foreground">
              {c.lastMessage}
            </span>
          </Link>
        ))}
      </nav>
    </div>
  );
};
export default ConversationList;
