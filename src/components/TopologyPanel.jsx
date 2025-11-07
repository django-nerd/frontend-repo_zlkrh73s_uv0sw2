import React from 'react';
import { Map, Link as LinkIcon, Radar } from 'lucide-react';

const links = [
  {
    from: 'AWS us-east-1',
    to: 'Coinbase (NY4)',
    rtt: 2.1,
  },
  {
    from: 'GCP europe-west1',
    to: 'Kraken (LD4)',
    rtt: 15.4,
  },
  {
    from: 'Azure southeastasia',
    to: 'Binance (SGX)',
    rtt: 185.9,
  },
];

export default function TopologyPanel() {
  return (
    <section id="topology" className="w-full bg-neutral-950 text-white">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-semibold">Topology Links</h2>
            <p className="mt-1 text-sm text-neutral-300">
              Representative routes between cloud colocation regions and exchanges.
            </p>
          </div>
          <div className="flex items-center gap-3 text-xs text-neutral-400">
            <Radar className="h-4 w-4" />
            realtime feed simulated
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
          {links.map((l, i) => (
            <div key={i} className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 p-4">
              <div className="flex items-center gap-3">
                <Map className="h-5 w-5 text-emerald-400" />
                <div>
                  <div className="text-sm font-medium">{l.from}</div>
                  <div className="flex items-center gap-2 text-xs text-neutral-400">
                    <LinkIcon className="h-3.5 w-3.5" />
                    <span>to</span>
                    <span className="text-neutral-200">{l.to}</span>
                  </div>
                </div>
              </div>
              <div className="rounded-md bg-emerald-500/10 px-3 py-1 text-sm font-semibold text-emerald-300">
                {l.rtt.toFixed(1)} ms
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
