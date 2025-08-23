"use client";
const TerminalOverlay = () => {
  return (
    <div className="absolute bottom-0 left-0 right-0 p-4">
      <div className="relative bg-destructive-foreground backdrop-blur-sm border border-destructive rounded-lg p-3 overflow-hidden font-mono shadow-lg">
        {/* Status bar */}
        <div className="flex items-center justify-between mb-2 border-b border-destructive pb-1">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
            <p className="text-accent">ONLYCHADS.FANS ONLINE</p>
          </div>
          <p className="text-accent">ID: CHD-42069</p>
        </div>

        <p className="text-destructive mb-2 tracking-tight">
          <span className="text-destructive">/</span> ACCESS GRANTED — WELCOME
          TO THE CHADS NETWORK
        </p>

        <div className="space-y-1.5 text-destructive">
          <div className="flex items-center">
            <div className="mr-2 bg-foreground text-background px-1">01</div>
            <span> 5 new Chads flexing in today’s feed</span>
          </div>
          <div className="flex items-center">
            <div className="mr-2 bg-foreground text-background px-1">02</div>
            <span> Exclusive gym tips uploaded</span>
          </div>
          <div className="flex items-center">
            <div className="mr-2 bg-foreground text-background px-1">03</div>
            <span> Chad leaderboard updated</span>
          </div>
          <div className="flex items-center">
            <div className="mr-2 bg-foreground text-background px-1">04</div>
            <span> VIP chatroom unlocked</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TerminalOverlay;
