import React from 'react';
import Spline from '@splinetool/react-spline';
import { Activity, Rocket } from 'lucide-react';

export default function HeroSplineCover() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden bg-black">
      {/* 3D Spline Background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/6tUXqVcUA0xgJugv/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient overlay to improve text contrast */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-black" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 pb-20 pt-28 text-center text-white">
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300 backdrop-blur">
          <Activity className="h-3.5 w-3.5" />
          Latency Topology Visualizer
        </div>

        <h1 className="mt-5 bg-gradient-to-b from-white to-white/70 bg-clip-text text-4xl font-semibold leading-tight text-transparent md:text-6xl">
          Crypto Exchange & Cloud Network, in 3D
        </h1>
        <p className="mt-4 max-w-2xl text-sm text-white/80 md:text-base">
          Explore co-location regions across AWS, GCP, and Azure with real-time and historical latency overlays to major cryptocurrency exchanges.
        </p>

        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <a
            href="#topology"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-emerald-500 px-5 py-2.5 text-sm font-medium text-black shadow-lg shadow-emerald-500/20 transition hover:bg-emerald-400"
          >
            <Rocket className="h-4 w-4" />
            Explore Topology
          </a>
          <a
            href="#latency"
            className="inline-flex items-center justify-center gap-2 rounded-md border border-white/20 bg-white/5 px-5 py-2.5 text-sm font-medium text-white/90 backdrop-blur transition hover:bg-white/10"
          >
            View Analytics
          </a>
        </div>
      </div>
    </section>
  );
}
