import { Label } from "@/components/ui/label";

const FooterAuth = () => {
  return (
    <footer className="flex flex-col items-start justify-center px-10 py-4 text-sm text-muted-foreground">
        <Label>© {new Date().getFullYear()} FlipChat. All rights reserved.</Label>
    </footer>
  );
};

export default FooterAuth;
