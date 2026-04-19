import { demoStore } from "@/lib/demo-data"

export default function SessionsPage() {
  const { sessions } = demoStore
  const honeypotCount = sessions.filter(s => s.type === 'honeypot').length
  const realCount = sessions.filter(s => s.type === 'real').length

  return (
    <>
      <h1 className="page-title">Session Monitor</h1>
      <p className="page-sub">Active real and honeypot sessions</p>

      <div className="demo-bar">
        ℹ️ Demo mode — {honeypotCount} honeypot, {realCount} real sessions
      </div>

      <div className="grid-4" style={{marginBottom:'1.5rem'}}>
        <div className="card">
          <div className="stat-label">Total Sessions</div>
          <div className="stat-value">{sessions.length}</div>
        </div>
        <div className="card">
          <div className="stat-label">Honeypot Sessions</div>
          <div className="stat-value" style={{color:'#c084fc'}}>{honeypotCount}</div>
        </div>
        <div className="card">
          <div className="stat-label">Real Sessions</div>
          <div className="stat-value" style={{color:'#4ade80'}}>{realCount}</div>
        </div>
        <div className="card">
          <div className="stat-label">Avg Score</div>
          <div className="stat-value" style={{color:'#fb923c'}}>
            {Math.round(sessions.reduce((a,b) => a + b.currentScore, 0) / sessions.length)}
          </div>
        </div>
      </div>

      <div className="card">
        <table className="table">
          <thead>
            <tr>
              <th>Session ID</th>
              <th>IP Address</th>
              <th>Type</th>
              <th>Score</th>
              <th>Requests</th>
              <th>Honeypot Latency</th>
              <th>Started</th>
              <th>Last Activity</th>
            </tr>
          </thead>
          <tbody>
            {sessions.map(session => (
              <tr key={session.id}>
                <td><code style={{background:'#0f172a', padding:'2px 8px', borderRadius:'4px', fontSize:'0.75rem'}}>{session.id}</code></td>
                <td><code style={{background:'#0f172a', padding:'2px 8px', borderRadius:'4px', fontSize:'0.8rem'}}>{session.ipAddress}</code></td>
                <td>
                  <span className={session.type === 'honeypot' ? 'badge badge-honeypotted' : 'badge badge-green'}>
                    {session.type === 'honeypot' ? '🍯 honeypot' : '✅ real'}
                  </span>
                </td>
                <td>
                  <span style={{
                    color: session.currentScore >= 60 ? '#f87171' : session.currentScore >= 30 ? '#fb923c' : '#4ade80',
                    fontWeight: 700
                  }}>
                    {session.currentScore}
                  </span>
                </td>
                <td>{session.requestCount.toLocaleString()}</td>
                <td>{session.cloneLatencyMs ? `${session.cloneLatencyMs}ms` : '—'}</td>
                <td style={{fontSize:'0.75rem', color:'#64748b'}}>{new Date(session.startedAt).toLocaleString()}</td>
                <td style={{fontSize:'0.75rem', color:'#64748b'}}>{new Date(session.lastActivity).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}
