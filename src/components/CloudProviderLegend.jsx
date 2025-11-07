import React from 'react';
import { Cloud, Server, Globe2 } from 'lucide-react';

const providers = [
  { name: 'AWS', color: 'bg-amber-400' },
  { name: 'GCP', color: 'bg-red-400' },
  { name: 'Azure', color: 'bg-blue-400' },
];

export default function CloudProviderLegend() {
  return (
    <section id="legend" className="w-full bg-neutral-900 text-white">
      <div className="mx-auto max-w-6xl px-6 py-8">
        <div className="mb-5 flex items-center gap-2 text-neutral-300">
          <Globe2 className="h-4 w-4" />
          <span className="text-sm">Cloud & Exchange Layers</span>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {providers.map((p) => (
            <div
              key={p.name}
              className="rounded-lg border border-white/10 bg-white/5 p-4 backdrop-blur-sm"
            >
              <div className="flex items-center gap-3">
                <span className={`h-3 w-3 rounded-full ${p.color}`} />
                <h3 className="text-lg font-semibold">{p.name}</h3>
              </div>
              <p className="mt-2 text-sm text-neutral-300">
                Co-location regions and edge POPs used for low-latency connectivity to major crypto exchanges.
              </p>
            </div>
          ))}

          <div className="rounded-lg border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <Server className="h-4 w-4 text-emerald-400" />
              <h3 className="text-lg font-semibold">Exchanges</h3>
            </div>
            <p className="mt-2 text-sm text-neutral-300">
              Major venues (e.g., Coinbase, Binance, Bybit, Kraken) with connectivity metrics to nearest cloud colo.
            </p>
          </div>

          <div className="rounded-lg border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <Cloud className="h-4 w-4 text-sky-400" />
              <h3 className="text-lg font-semibold">Latency Overlays</h3>
            </div>
            <p className="mt-2 text-sm text-neutral-300">
              Real-time median RTT and historical p95 displayed as colored links between regions and exchanges.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
