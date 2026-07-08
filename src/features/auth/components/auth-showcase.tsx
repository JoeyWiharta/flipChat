import { MessageCircle } from "lucide-react"

const AuthShowcase = () => {
  return (
    <section className="hidden lg:flex lg:w-7/12 relative bg-muted/30 items-center justify-center overflow-hidden">
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />

      <div className="relative w-full max-w-2xl h-[600px]">
        {/* Card: Messages list */}
        <div className="absolute top-0 left-10 bg-card/70 backdrop-blur-xl border rounded-lg p-6 w-72 shadow-xl">
          <div className="flex items-center justify-between mb-4">
            <span className="font-semibold">Messages</span>
            <MessageCircle className="h-5 w-5 text-primary" />
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-3 bg-primary/10 p-2 rounded-lg">
              <div className="w-10 h-10 rounded-full bg-primary" />
              <div className="flex-1">
                <div className="text-sm font-bold">Design Team</div>
                <div className="text-xs text-muted-foreground">Typing...</div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-2">
              <div className="w-10 h-10 rounded-full bg-muted-foreground/20" />
              <div className="flex-1">
                <div className="text-sm font-bold">Alex Rivera</div>
                <div className="text-xs text-muted-foreground">The mockup looks...</div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-2">
              <div className="w-10 h-10 rounded-full bg-muted-foreground/20" />
              <div className="flex-1">
                <div className="text-sm font-bold">Sarah Chen</div>
                <div className="text-xs text-muted-foreground">Can we sync tomorrow?</div>
              </div>
            </div>
          </div>
        </div>

        {/* Card: Active conversation */}
        <div className="absolute top-32 right-0 bg-card/70 backdrop-blur-xl border rounded-lg p-6 w-96 shadow-xl z-10">
          <div className="flex items-center gap-3 mb-6 border-b pb-4">
            <div className="w-10 h-10 rounded-full bg-primary relative">
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-background rounded-full" />
            </div>
            <div>
              <div className="text-sm font-bold">Jordan Smith</div>
              <div className="text-xs text-primary">Active now</div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex justify-start">
              <div className="bg-muted px-4 py-2 rounded-2xl rounded-tl-none text-sm max-w-[80%]">
                Hey! Did you see the new Emerald theme tokens?
              </div>
            </div>
            <div className="flex justify-end">
              <div className="bg-primary text-primary-foreground px-4 py-2 rounded-2xl rounded-tr-none text-sm max-w-[80%]">
                Yes, they&apos;re incredibly crisp! Love the minimalism.
              </div>
            </div>
            <div className="flex items-center gap-2 pt-2">
              <div className="flex gap-1">
                <span className="w-1.5 h-1.5 bg-primary/40 rounded-full animate-bounce [animation-delay:-0.3s]" />
                <span className="w-1.5 h-1.5 bg-primary/40 rounded-full animate-bounce [animation-delay:-0.15s]" />
                <span className="w-1.5 h-1.5 bg-primary/40 rounded-full animate-bounce" />
              </div>
              <span className="text-xs text-muted-foreground italic">Jordan is typing</span>
            </div>
          </div>
        </div>

        {/* Card: Team directory */}
        <div className="absolute bottom-10 left-20 bg-card/70 backdrop-blur-xl border rounded-lg p-6 w-64 shadow-xl">
          <div className="text-xs font-semibold text-muted-foreground uppercase mb-4">
            Team Directory
          </div>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground text-[10px] font-bold">
                MK
              </div>
              <span className="text-sm">Marcus King</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-muted-foreground/20 flex items-center justify-center text-[10px] font-bold">
                LP
              </div>
              <span className="text-sm">Lisa Park</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-[10px] font-bold">
                JD
              </div>
              <span className="text-sm">John Doe</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AuthShowcase