"use client";
import { Search, Upload, Bell, ExternalLink } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import WorkspaceSwitcher from "./WorkspaceSwitcher";

export default function DataTopbar() {
  return (
    <header className="h-14 border-b border-border bg-white/90 backdrop-blur-sm flex items-center px-4 gap-3 flex-shrink-0 relative z-50">
      {/* Workspace switcher */}
      <WorkspaceSwitcher />

      {/* Divider */}
      <div className="h-5 w-px bg-black/10 flex-shrink-0" />

      {/* Search */}
      <div className="flex-1 max-w-sm">
        <div className="relative">
          <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-black/40" />
          <input
            type="text"
            placeholder="Search datasets, queries, dashboards…"
            className="w-full bg-black/5 border border-black/10 rounded-full pl-8 pr-3 py-1.5 text-xs text-black/80 placeholder:text-black/40 focus:outline-none focus:border-black/30 focus:bg-white transition-all shadow-sm shadow-black/5"
          />
        </div>
      </div>

      <div className="flex-1" />

      {/* Actions */}
      <div className="flex items-center gap-2">
        {/* Import button */}
        <Link
          href="/app/import"
          className={cn(
            buttonVariants({ size: "sm" }),
            "bg-black text-white hover:bg-black/90 font-semibold text-xs h-8 px-4 rounded-full shadow-sm shadow-black/10"
          )}
        >
          <Upload className="w-3.5 h-3.5 mr-1.5" />
          Import
        </Link>

        {/* Notifications placeholder */}
        <button className="w-8 h-8 rounded-full border border-black/10 bg-black/5 flex items-center justify-center text-black/50 hover:text-black/80 hover:bg-black/10 transition-all shadow-sm shadow-black/5">
          <Bell className="w-3.5 h-3.5" />
        </button>

        {/* Back to portfolio */}
        <Link
          href="/"
          className="hidden sm:flex items-center gap-1 text-[10px] text-black/40 hover:text-black/70 transition-colors font-medium ml-2"
        >
          <ExternalLink className="w-3 h-3" />
          6ixtype
        </Link>
      </div>
    </header>
  );
}
