import React from 'react';
import HeroSplineCover from './components/HeroSplineCover';
import CloudProviderLegend from './components/CloudProviderLegend';
import TopologyPanel from './components/TopologyPanel';
import LatencyHeatmap from './components/LatencyHeatmap';

function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      <HeroSplineCover />
      <CloudProviderLegend />
      <TopologyPanel />
      <LatencyHeatmap />

      <footer className="border-t border-white/10 bg-black/90 py-10">
        <div className="mx-auto max-w-6xl px-6 text-sm text-neutral-400">
          Built for high-frequency crypto infrastructure teams. Data shown is demo-only; wire to your telemetry API for live metrics.
        </div>
      </footer>
    </div>
  );
}

export default App;
