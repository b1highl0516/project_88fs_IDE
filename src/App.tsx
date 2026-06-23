export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <header className="border-b border-slate-700 bg-slate-900/50 backdrop-blur">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold text-white">🚀 VS Code AI Team</h1>
          <p className="text-sm text-slate-400">Multi-Agent IDE with Custom Router</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg border border-slate-700 bg-slate-800/50 p-6">
            <h2 className="mb-2 text-lg font-semibold text-blue-400">📁 File Explorer</h2>
            <p className="text-sm text-slate-300">VS Code style file tree with full context menu support</p>
          </div>

          <div className="rounded-lg border border-slate-700 bg-slate-800/50 p-6">
            <h2 className="mb-2 text-lg font-semibold text-yellow-400">🤖 AI Agents</h2>
            <p className="text-sm text-slate-300">Architect, Coder, and Reviewer working in collaboration</p>
          </div>

          <div className="rounded-lg border border-slate-700 bg-slate-800/50 p-6">
            <h2 className="mb-2 text-lg font-semibold text-purple-400">🔀 Router</h2>
            <p className="text-sm text-slate-300">Custom lightweight hash-based routing system</p>
          </div>

          <div className="rounded-lg border border-slate-700 bg-slate-800/50 p-6">
            <h2 className="mb-2 text-lg font-semibold text-green-400">⚡ Performance</h2>
            <p className="text-sm text-slate-300">Real-time route analysis with Canvas visualization</p>
          </div>

          <div className="rounded-lg border border-slate-700 bg-slate-800/50 p-6">
            <h2 className="mb-2 text-lg font-semibold text-cyan-400">🧪 Testing</h2>
            <p className="text-sm text-slate-300">Automated CI/CD with GitHub Actions</p>
          </div>

          <div className="rounded-lg border border-slate-700 bg-slate-800/50 p-6">
            <h2 className="mb-2 text-lg font-semibold text-red-400">📦 Build</h2>
            <p className="text-sm text-slate-300">Vite optimized production builds</p>
          </div>
        </div>

        <div className="mt-12 rounded-lg border border-slate-700 bg-slate-800/50 p-8">
          <h2 className="mb-4 text-xl font-bold text-white">Getting Started</h2>
          <div className="space-y-2 font-mono text-sm text-slate-300">
            <p>$ npm install</p>
            <p>$ npm run dev</p>
            <p>$ npm run test</p>
            <p>$ npm run build</p>
          </div>
        </div>
      </main>
    </div>
  );
}
