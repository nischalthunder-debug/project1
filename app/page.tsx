import { getDashboardSummary } from "@/lib/demo-data"

export default function Dashboard() {
  const summary = getDashboardSummary()

  return (
    <>
      <h1 className="page-title">Security Dashboard</h1>
      <p className="page-sub">Real-time AI-powered threat intelligence</p>

      <div className="demo-bar">
        ℹ️ Running in demo mode — all data is synthetic. No DATABASE_URL required.
      </div>

      <div className="grid-4">
        <div className="card">
          <div className="stat-label">Threats Today</div>
          <div className="stat-value" style={{color:'#f87171'}}>{summary.totalThreatsToday}</div>
          <div className="stat-sub">↑ 12% from yesterday</div>
        </div>
        <div className="card">
          <div className="stat-label">Honeypotted</div>
          <div className="stat-value" style={{color:'#c084fc'}}>{summary.honeypottedSessions}</div>
          <div className="stat-sub">Active sessions</div>
        </div>
        <div className="card">
          <div className="stat-label">Canary Trips</div>
          <div className="stat-value" style={{color:'#fb923c'}}>{summary.canaryTrips}</div>
          <div className="stat-sub">Last 24 hours</div>
        </div>
        <div className="card">
          <div className="stat-label">Blocked Requests</div>
          <div className="stat-value" style={{color:'#4ade80'}}>{summary.blockedRequests.toLocaleString()}</div>
          <div className="stat-sub">Served fake data</div>
        </div>
        <div className="card">
          <div className="stat-label">AI Accuracy</div>
          <div className="stat-value" style={{color:'#38bdf8'}}>{(summary.aiAccuracyRate * 100).toFixed(1)}%</div>
          <div className="stat-sub">Threat detection rate</div>
        </div>
        <div className="card">
          <div className="stat-label">Avg Threat Score</div>
          <div className="stat-value" style={{color:'#fb923c'}}>{summary.avgThreatScore}</div>
          <div className="stat-sub">Out of 100</div>
        </div>
        <div className="card">
          <div className="stat-label">Protected Businesses</div>
          <div className="stat-value" style={{color:'#4ade80'}}>{summary.protectedBusinesses}</div>
          <div className="stat-sub">Global customers</div>
        </div>
        <div className="card">
          <div className="stat-label">Uptime</div>
          <div className="stat-value" style={{color:'#4ade80'}}>{summary.uptimeDays}d</div>
          <div className="stat-sub">99.99% SLA</div>
        </div>
      </div>

      <div className="card">
        <div className="section-title">Quick Navigation</div>
        <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(180px,1fr))', gap:'1rem'}}>
          {[
            { href: '/threats', icon: '⚠️', label: 'View Threats', sub: 'AI-scored threat list' },
            { href: '/sessions', icon: '🔄', label: 'View Sessions', sub: 'Active & honeypot sessions' },
            { href: '/attacks', icon: '🎯', label: 'Attack Profiles', sub: 'Forensic analysis' },
            { href: '/canary', icon: '🐦', label: 'Canary Tokens', sub: 'Trip detection' },
            { href: '/pricing', icon: '💳', label: 'Pricing Plans', sub: 'Upgrade your plan' },
          ].map(item => (
            <a key={item.href} href={item.href} style={{
              display:'block', background:'#0f172a', border:'1px solid #334155',
              borderRadius:'10px', padding:'1.25rem', transition:'border-color 0.15s'
            }}>
              <div style={{fontSize:'1.5rem', marginBottom:'0.5rem'}}>{item.icon}</div>
              <div style={{fontWeight:600, color:'#f1f5f9', marginBottom:'0.25rem'}}>{item.label}</div>
              <div style={{fontSize:'0.75rem', color:'#64748b'}}>{item.sub}</div>
            </a>
          ))}
        </div>
      </div>
    </>
  )
}
