/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Letter from './components/Letter';
import Decorations from './components/Decorations';
import Countdown from './components/Countdown';

export default function App() {
  return (
    <div className="min-h-screen bg-rose-50 p-4 md:p-8 font-sans text-slate-800">
      <div className="max-w-7xl mx-auto h-full min-h-[calc(100vh-4rem)]">
        <header className="mb-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif text-rose-800 tracking-tight">
            Dzień Kobiet
          </h1>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 h-full min-h-[600px]">
          {/* Section 1: Letter */}
          <section className="bg-white rounded-3xl shadow-sm border border-rose-100 p-6 flex items-center justify-center relative">
            <Letter />
          </section>

          {/* Section 2: Decorations */}
          <section className="rounded-3xl flex items-center justify-center">
            <Decorations />
          </section>

          {/* Section 3: Countdown */}
          <section className="rounded-3xl flex items-center justify-center">
            <Countdown />
          </section>
        </div>
      </div>
    </div>
  );
}
