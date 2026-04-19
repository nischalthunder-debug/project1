import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SentinelMesh - AI-Powered API Security',
  description: 'Protect your APIs with AI threat detection and honeypot redirection',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <style>{`
          * { box-sizing: border-box; margin: 0; padding: 0; }
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; background: #0f172a; color: #e2e8f0; min-height: 100vh; }
          a { color: inherit; text-decoration: none; }
          .nav { background: #1e293b; border-bottom: 1px solid #334155; padding: 0 2rem; display: flex; align-items: center; gap: 2rem; height: 60px; position: sticky; top: 0; z-index: 100; }
          .nav-brand { font-size: 1.25rem; font-weight: 700; color: #38bdf8; display: flex; align-items: center; gap: 0.5rem; }
          .nav-badge { background: #0ea5e9; color: white; font-size: 0.65rem; padding: 2px 6px; border-radius: 4px; font-weight: 600; }
          .nav-link { color: #94a3b8; font-size: 0.875rem; padding: 0.5rem 0.75rem; border-radius: 6px; transition: all 0.15s; }
          .nav-link:hover { background: #334155; color: #e2e8f0; }
          .main { padding: 2rem; max-width: 1400px; margin: 0 auto; }
          .page-title { font-size: 1.875rem; font-weight: 700; color: #f1f5f9; margin-bottom: 0.5rem; }
          .page-sub { color: #64748b; font-size: 0.875rem; margin-bottom: 2rem; }
          .card { background: #1e293b; border: 1px solid #334155; border-radius: 12px; padding: 1.5rem; }
          .grid-4 { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1rem; margin-bottom: 2rem; }
          .stat-label { font-size: 0.75rem; color: #64748b; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 0.5rem; }
          .stat-value { font-size: 2rem; font-weight: 700; color: #f1f5f9; }
          .stat-sub { font-size: 0.75rem; color: #64748b; margin-top: 0.25rem; }
          .badge { display: inline-flex; align-items: center; padding: 2px 10px; border-radius: 9999px; font-size: 0.75rem; font-weight: 600; }
          .badge-critical { background: rgba(239,68,68,0.2); color: #f87171; }
          .badge-high { background: rgba(249,115,22,0.2); color: #fb923c; }
          .badge-medium { background: rgba(234,179,8,0.2); color: #facc15; }
          .badge-low { background: rgba(34,197,94,0.2); color: #4ade80; }
          .badge-active { background: rgba(239,68,68,0.15); color: #f87171; }
          .badge-honeypotted { background: rgba(168,85,247,0.2); color: #c084fc; }
          .badge-monitoring { background: rgba(59,130,246,0.2); color: #60a5fa; }
          .badge-tripped { background: rgba(239,68,68,0.2); color: #f87171; }
          .badge-green { background: rgba(34,197,94,0.2); color: #4ade80; }
          .table { width: 100%; border-collapse: collapse; }
          .table th { text-align: left; font-size: 0.75rem; color: #64748b; text-transform: uppercase; letter-spacing: 0.05em; padding: 0.75rem 1rem; border-bottom: 1px solid #334155; }
          .table td { padding: 0.875rem 1rem; border-bottom: 1px solid #1e293b; font-size: 0.875rem; color: #cbd5e1; }
          .table tr:last-child td { border-bottom: none; }
          .table tr:hover td { background: #263548; }
          .demo-bar { background: rgba(56,189,248,0.1); border: 1px solid rgba(56,189,248,0.3); border-radius: 8px; padding: 0.75rem 1.25rem; margin-bottom: 1.5rem; font-size: 0.8rem; color: #7dd3fc; display: flex; align-items: center; gap: 0.5rem; }
          .section-title { font-size: 1.125rem; font-weight: 600; color: #f1f5f9; margin-bottom: 1.25rem; }
          .btn { display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.5rem 1rem; border-radius: 8px; font-size: 0.875rem; font-weight: 500; cursor: pointer; border: none; transition: all 0.15s; }
          .btn-primary { background: #0ea5e9; color: white; }
          .btn-primary:hover { background: #0284c7; }
          .metric-up { color: #4ade80; font-size: 0.75rem; }
        `}</style>
      </head>
      <body>
        <nav className="nav">
          <div className="nav-brand">
            🛡️ SentinelMesh <span className="nav-badge">DEMO</span>
          </div>
          <a href="/" className="nav-link">Dashboard</a>
          <a href="/threats" className="nav-link">Threats</a>
          <a href="/sessions" className="nav-link">Sessions</a>
          <a href="/attacks" className="nav-link">Attack Profiles</a>
          <a href="/canary" className="nav-link">Canary Tokens</a>
          <a href="/pricing" className="nav-link">Pricing</a>
        </nav>
        <main className="main">
          {children}
        </main>
      </body>
    </html>
  )
}
