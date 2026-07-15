import { SquarePen } from "lucide-react"

const AuthShowcase = () => {
  return (
    <section className="relative hidden h-full w-full items-center justify-center overflow-hidden lg:flex">
      <div className="absolute -left-20 top-1/4 h-72 w-72 rounded-full bg-primary/10 blur-2xl" />
      <div className="absolute -right-20 bottom-1/4 h-72 w-72 rounded-full bg-primary/10 blur-2xl" />

      <div className="relative h-[600px] w-full max-w-2xl">
        {/* Messages list */}
        <div className="absolute left-10 top-0 w-72 animate-bounce rounded-xl border bg-card p-5 shadow-xl [animation-duration:4s] [animation-delay:0s] [animation-timing-function:ease-in-out]">
          <div className="mb-4 flex items-center justify-between">
            <span className="font-semibold">Messages</span>
            <SquarePen className="h-4 w-4 text-muted-foreground" />
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-3 rounded-lg bg-primary/10 p-2">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                DT
              </div>
              <div className="min-w-0 flex-1">
                <div className="truncate text-sm font-semibold">Design Team</div>
                <div className="truncate text-xs text-muted-foreground">Typing...</div>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-lg p-2">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-muted-foreground/15 text-sm font-semibold">
                AR
              </div>
              <div className="min-w-0 flex-1">
                <div className="truncate text-sm font-semibold">Alex Rivera</div>
                <div className="truncate text-xs text-muted-foreground">The mockup looks...</div>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-lg p-2">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-muted-foreground/15 text-sm font-semibold">
                SC
              </div>
              <div className="min-w-0 flex-1">
                <div className="truncate text-sm font-semibold">Sarah Chen</div>
                <div className="truncate text-xs text-muted-foreground">Can we sync tomorrow?</div>
              </div>
            </div>
          </div>
        </div>

        {/* Active conversation */}
        <div className="absolute right-0 top-32 z-10 w-96 animate-bounce rounded-xl border bg-card p-5 shadow-xl [animation-duration:4s] [animation-delay:1.3s] [animation-timing-function:ease-in-out]">
          <div className="mb-4 flex items-center gap-3 border-b pb-4">
            <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
              JS
              <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-card bg-emerald-500" />
            </div>
            <div>
              <div className="text-sm font-semibold">Jordan Smith</div>
              <div className="text-xs text-primary">Active now</div>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex justify-start">
              <div className="max-w-[80%] rounded-2xl rounded-tl-sm bg-muted px-4 py-2 text-sm">
                Hey! Did you see the new theme tokens?
              </div>
            </div>
            <div className="flex justify-end">
              <div className="max-w-[80%] rounded-2xl rounded-tr-sm bg-primary px-4 py-2 text-sm text-primary-foreground">
                Yes, they're incredibly crisp! Love the minimalism.
              </div>
            </div>
            <div className="flex items-center gap-2 pt-1">
              <span className="flex gap-1">
                <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-primary/50 [animation-delay:-0.3s]" />
                <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-primary/50 [animation-delay:-0.15s]" />
                <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-primary/50" />
              </span>
              <span className="text-xs italic text-muted-foreground">Jordan is typing</span>
            </div>
          </div>
        </div>

        {/* Team directory */}
        <div className="absolute bottom-10 left-20 w-64 animate-bounce rounded-xl border bg-card p-5 shadow-xl [animation-duration:4s] [animation-delay:2.6s] [animation-timing-function:ease-in-out]">
          <div className="mb-4 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Team Directory
          </div>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-[10px] font-bold text-secondary-foreground">
                MK
              </div>
              <span className="text-sm">Marcus King</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted-foreground/15 text-[10px] font-bold">
                LP
              </div>
              <span className="text-sm">Lisa Park</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/15 text-[10px] font-bold text-primary">
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
