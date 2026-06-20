"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  FolderOpen,
  Upload,
  Archive,
  Table2,
  FlaskConical,
  ChartColumn,
  Box,
  Wand2,
  LayoutGrid,
  BookOpen,
  GraduationCap,
  Zap,
  Plug,
  Share2,
  Settings,
  Database,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navSections = [
  {
    label: null,
    items: [
      { name: "Overview", path: "/app", icon: LayoutDashboard },
      { name: "Workspaces", path: "/app/workspaces", icon: FolderOpen },
    ],
  },
  {
    label: "Data",
    items: [
      { name: "Import Centre", path: "/app/import", icon: Upload },
      { name: "Data Vault", path: "/app/vault", icon: Archive },
      { name: "Datasets", path: "/app/datasets", icon: Table2 },
    ],
  },
  {
    label: "Analysis",
    items: [
      { name: "Query Lab", path: "/app/query", icon: FlaskConical },
      { name: "Visualise", path: "/app/visualise", icon: ChartColumn },
      { name: "3D Lab", path: "/app/3d", icon: Box },
      { name: "Render Studio", path: "/app/render", icon: Wand2 },
      { name: "Dashboards", path: "/app/dashboards", icon: LayoutGrid },
    ],
  },
  {
    label: "Learn",
    items: [
      { name: "Research", path: "/app/research", icon: BookOpen },
      { name: "Learning", path: "/app/learn", icon: GraduationCap },
    ],
  },
  {
    label: "System",
    items: [
      { name: "Automations", path: "/app/automations", icon: Zap },
      { name: "Connectors", path: "/app/connectors", icon: Plug },
      { name: "Publishing", path: "/app/publishing", icon: Share2 },
      { name: "Settings", path: "/app/settings", icon: Settings },
    ],
  },
];

interface DataSidebarProps {
  collapsed: boolean;
  onToggle: () => void;
}

export default function DataSidebar({ collapsed, onToggle }: DataSidebarProps) {
  const pathname = usePathname();

  return (
    <aside
      className={cn(
        "flex flex-col h-full bg-sidebar border-r border-sidebar-border transition-all duration-300 flex-shrink-0",
        collapsed ? "w-16" : "w-56"
      )}
    >
      {/* Logo */}
      <div className="flex items-center gap-2.5 px-4 h-14 border-b border-sidebar-border">
        <div className="w-7 h-7 rounded-lg bg-black flex items-center justify-center flex-shrink-0">
          <Database className="w-3.5 h-3.5 text-white" />
        </div>
        {!collapsed && (
          <span className="text-sm font-black text-sidebar-foreground tracking-tight">6Data</span>
        )}
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto py-3 px-2 space-y-1">
        {navSections.map((section, si) => (
          <div key={si} className={si > 0 ? "pt-2" : ""}>
            {section.label && !collapsed && (
              <p className="px-2 pb-1.5 text-[9px] font-bold text-sidebar-foreground/40 uppercase tracking-widest">
                {section.label}
              </p>
            )}
            {section.label && collapsed && si > 0 && (
              <div className="mx-2 mb-1.5 h-px bg-sidebar-border" />
            )}
            {section.items.map((item) => {
              const Icon = item.icon;
              const isActive =
                item.path === "/app"
                  ? pathname === item.path
                  : pathname.startsWith(item.path);

              return (
                <Link
                  key={item.path}
                  href={item.path}
                  title={collapsed ? item.name : undefined}
                  className={cn(
                    "flex items-center gap-2.5 px-2 py-2 rounded-lg text-xs font-medium transition-all duration-150",
                    isActive
                      ? "bg-black/5 text-sidebar-foreground"
                      : "text-sidebar-foreground/60 hover:text-sidebar-foreground hover:bg-black/5",
                    collapsed && "justify-center"
                  )}
                >
                  <Icon
                    className={cn(
                      "flex-shrink-0",
                      collapsed ? "w-4.5 h-4.5" : "w-4 h-4",
                      isActive ? "text-sidebar-foreground" : "text-sidebar-foreground/40"
                    )}
                  />
                  {!collapsed && <span>{item.name}</span>}
                </Link>
              );
            })}
          </div>
        ))}
      </nav>

      {/* Collapse toggle */}
      <div className="px-2 py-3 border-t border-sidebar-border">
        <button
          onClick={onToggle}
          className="w-full flex items-center justify-center py-2 rounded-lg text-sidebar-foreground/40 hover:text-sidebar-foreground/80 hover:bg-black/5 transition-all duration-150"
          title={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {collapsed ? (
            <ChevronRight className="w-4 h-4" />
          ) : (
            <>
              <ChevronLeft className="w-4 h-4 mr-1.5" />
              <span className="text-xs">Collapse</span>
            </>
          )}
        </button>
      </div>
    </aside>
  );
}
