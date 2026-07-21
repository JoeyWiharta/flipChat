import { MessageCircle } from "lucide-react";

const ProfilePage = () => {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-2 text-muted-foreground">
      <MessageCircle className="h-10 w-10" />
      <p className="text-sm">Profile Page</p>
    </div>
  );
};
export default ProfilePage;
