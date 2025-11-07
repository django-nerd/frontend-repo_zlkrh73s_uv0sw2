import React from 'react';

// Simple mock latency heatmap for three providers across regions
const regions = ['us-east-1', 'eu-west-1', 'ap-southeast-1'];
const providers = [
  { key: 'aws', label: 'AWS', color: 'text-amber-400' },
  { key: 'gcp', label: 'GCP', color: 'text-red-400' },
  { key: 'azure', label: 'Azure', color: 'text-blue-400' },
];

// Mock data (ms)
const data = {
  'us-east-1': { aws: 2.1, gcp: 3.7, azure: 2.9 },
  'eu-west-1': { aws: 15.2, gcp: 16.5, azure: 14.7 },
  'ap-southeast-1': { aws: 190.4, gcp: 185.9, azure: 200.1 },
};

function intensity(ms) {
  if (ms <= 5) return 'bg-emerald-500/70';
  if (ms <= 20) return 'bg-yellow-500/70';
  if (ms <= 80) return 'bg-orange-500/70';
  return 'bg-rose-600/70';
}

export default function LatencyHeatmap() {
  return (
    <section id="latency" className="w-full bg-black text-white">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold">Latency Heatmap</h2>
            <p className="mt-1 text-sm text-neutral-300">
              Snapshot of median round-trip time (ms) from cloud regions to nearest exchange.
            </p>
          </div>
          <div className="flex items-center gap-2 text-xs text-neutral-400">
            <span className="h-3 w-3 rounded-sm bg-emerald-500/70" /> <span>≤ 5ms</span>
            <span className="h-3 w-3 rounded-sm bg-yellow-500/70" /> <span>≤ 20ms</span>
            <span className="h-3 w-3 rounded-sm bg-orange-500/70" /> <span>≤ 80ms</span>
            <span className="h-3 w-3 rounded-sm bg-rose-600/70" /> <span>&gt; 80ms</span>
          </div>
        </div>

        <div className="mt-6 overflow-hidden rounded-xl border border-white/10 bg-white/5">
          <div className="grid grid-cols-4 bg-white/5">
            <div className="p-3 text-xs font-medium text-neutral-300">Region</div>
            {providers.map((p) => (
              <div key={p.key} className="p-3 text-center text-xs font-medium text-neutral-300">
                {p.label}
              </div>
            ))}
          </div>

          {regions.map((r) => (
            <div key={r} className="grid grid-cols-4 border-t border-white/10">
              <div className="p-3 text-sm text-neutral-200">{r}</div>
              {providers.map((p) => (
                <div key={p.key} className="p-2">
                  <div className={`flex h-10 items-center justify-center rounded-md ${intensity(data[r][p.key])}`}>
                    <span className="text-sm font-semibold">{data[r][p.key].toFixed(1)} ms</span>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
