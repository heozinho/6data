"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Box, Code2, Database, Wand2 } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white pb-24">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <div className="relative w-8 h-8 flex-shrink-0">
            <Image 
              src="/brand/6data_main_logo_transparent.png" 
              alt="6Data Logo" 
              fill 
              className="object-contain dark:invert"
            />
          </div>
          <span className="font-bold text-lg tracking-tight">6Data</span>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/app" className="text-sm font-medium text-black/60 hover:text-black transition-colors">
            Sign In
          </Link>
          <Link href="/app" className="text-sm font-semibold bg-black text-white px-4 py-2 rounded-full hover:bg-black/90 transition-all shadow-md hover:shadow-lg">
            Start Free
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6 max-w-5xl mx-auto text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-black tracking-tight leading-[1.1] mb-6"
        >
          The data workspace <br className="hidden md:block" /> for modern teams.
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-lg md:text-xl text-black/50 mb-10 max-w-2xl mx-auto font-medium"
        >
          Import, clean, query, and visualize your data in a beautiful, fast, and lightweight environment. Built for creators and sharp startups.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex items-center justify-center gap-4"
        >
          <Link href="/app" className="group flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full font-semibold text-sm hover:bg-black/90 transition-all shadow-lg shadow-black/10">
            Open Workspace
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <button className="flex items-center gap-2 bg-black/5 text-black border border-black/10 px-6 py-3 rounded-full font-semibold text-sm hover:bg-black/10 transition-all">
            View Demo
          </button>
        </motion.div>
      </section>

      {/* Hero Mockup */}
      <section className="px-6 max-w-6xl mx-auto mt-4 mb-24">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="relative rounded-2xl border border-black/5 bg-black/5 p-2 shadow-2xl shadow-black/10"
        >
          <div className="rounded-xl overflow-hidden bg-white border border-black/10 flex h-[600px] relative">
            <div className="w-56 border-r border-black/5 bg-[#fcfcfc] p-4 hidden md:block">
              <div className="relative w-6 h-6 mb-6 flex-shrink-0">
                <Image 
                  src="/brand/6data_main_logo_transparent.png" 
                  alt="6Data Logo" 
                  fill 
                  className="object-contain dark:invert"
                />
              </div>
              <div className="space-y-1">
                <div className="h-8 rounded-md bg-black/5 flex items-center px-2 gap-2">
                  <div className="w-3 h-3 rounded-full bg-black/20" />
                  <div className="h-2 w-16 bg-black/20 rounded-full" />
                </div>
                <div className="h-8 rounded-md flex items-center px-2 gap-2 opacity-50">
                  <div className="w-3 h-3 rounded-full bg-black/20" />
                  <div className="h-2 w-20 bg-black/20 rounded-full" />
                </div>
              </div>
            </div>
            
            {/* Mockup Main */}
            <div className="flex-1 bg-white p-6 relative overflow-hidden">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <div className="h-5 w-32 bg-black rounded-md mb-2" />
                  <div className="h-3 w-48 bg-black/20 rounded-full" />
                </div>
                <div className="h-8 w-24 rounded-full bg-black/5" />
              </div>

              {/* Data Table Mockup */}
              <div className="rounded-xl border border-black/10 shadow-sm overflow-hidden bg-white">
                <div className="h-10 border-b border-black/5 bg-black/5 flex items-center px-4 gap-4">
                  <div className="h-3 w-16 bg-black/20 rounded-full" />
                  <div className="h-3 w-24 bg-black/20 rounded-full" />
                  <div className="h-3 w-20 bg-black/20 rounded-full" />
                </div>
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="h-12 border-b border-black/5 flex items-center px-4 gap-4">
                    <div className="h-3 w-16 bg-black/10 rounded-full" />
                    <div className="h-3 w-32 bg-black/10 rounded-full" />
                    <div className="h-3 w-12 bg-black/10 rounded-full" />
                  </div>
                ))}
              </div>

              {/* Floating Dark Panel (API Log) */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute bottom-8 right-8 w-72 rounded-xl bg-[#0a0a0a] border border-white/10 shadow-2xl p-4 text-white font-mono text-[10px]"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-white/50">API / SYNC</span>
                  <span className="flex items-center gap-1 text-emerald-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    LIVE
                  </span>
                </div>
                <div className="space-y-1.5 opacity-80">
                  <p><span className="text-blue-400">POST</span> /api/v1/ingest [200 OK]</p>
                  <p className="text-white/50">Parsed 14,209 rows in 240ms</p>
                  <p><span className="text-green-400">SUCCESS</span> Schema validated</p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Features Grid */}
      <section className="px-6 max-w-5xl mx-auto py-16">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-[#f8f9fa] border border-black/5">
            <div className="w-10 h-10 rounded-full bg-white border border-black/10 flex items-center justify-center mb-4 shadow-sm">
              <Code2 className="w-4 h-4 text-black" />
            </div>
            <h3 className="font-bold mb-2">SQL & API Native</h3>
            <p className="text-sm text-black/60 leading-relaxed">Query your datasets instantly with our lightning-fast SQL engine, or push data via the ingestion API.</p>
          </div>
          <div className="p-6 rounded-2xl bg-[#f8f9fa] border border-black/5">
            <div className="w-10 h-10 rounded-full bg-white border border-black/10 flex items-center justify-center mb-4 shadow-sm">
              <Box className="w-4 h-4 text-black" />
            </div>
            <h3 className="font-bold mb-2">3D Visualizations</h3>
            <p className="text-sm text-black/60 leading-relaxed">Go beyond charts. Map out multi-dimensional data visually using our integrated Render Studio.</p>
          </div>
          <div className="p-6 rounded-2xl bg-[#f8f9fa] border border-black/5">
            <div className="w-10 h-10 rounded-full bg-white border border-black/10 flex items-center justify-center mb-4 shadow-sm">
              <Wand2 className="w-4 h-4 text-black" />
            </div>
            <h3 className="font-bold mb-2">Auto-Cleaning</h3>
            <p className="text-sm text-black/60 leading-relaxed">Automatic schema detection, null handling, and data profiling without writing a single line of Python.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
