import { demoStore } from "@/lib/demo-data"

export default function CanaryPage() {
  const { canaryTokens } = demoStore
  const tripped = canaryTokens.filter(t => t.status === 'tripped').length
  const active = canaryTokens.filter(t => t.status === 'active').length

  return (
    <>
      <h1 className="page-title">Canary Tokens</h1>
      <p className="page-sub">Detect data exfiltration attempts with embedded traps</p>

      <div className="demo-bar">
        ℹ️ Demo mode — {canaryTokens.length} tokens ({tripped} tripped, {active} active)
      </div>

      <div className="grid-4" style={{marginBottom:'1.5rem'}}>
        <div className="card">
          <div className="stat-label">Total Tokens</div>
          <div className="stat-value">{canaryTokens.length}</div>
        </div>
        <div className="card">
          <div className="stat-label">Tripped</div>
          <div className="stat-value" style={{color:'#f87171'}}>{tripped}</div>
        </div>
        <div className="card">
          <div className="stat-label">Active (Watching)</div>
          <div className="stat-value" style={{color:'#4ade80'}}>{active}</div>
        </div>
        <div className="card">
          <div className="stat-label">Total Trips</div>
          <div className="stat-value" style={{color:'#fb923c'}}>{canaryTokens.reduce((a,b) => a + b.tripCount, 0)}</div>
        </div>
      </div>

      <div className="card">
        <table className="table">
          <thead>
            <tr>
              <th>Token Name</th>
              <th>Type</th>
              <th>Location</th>
              <th>Status</th>
              <th>Trip Count</th>
              <th>Last Tripped</th>
              <th>Created</th>
            </tr>
          </thead>
          <tbody>
            {canaryTokens.map(token => (
              <tr key={token.id}>
                <td style={{fontWeight:600, color:'#f1f5f9'}}>{token.name}</td>
                <td>
                  <span style={{
                    background:'rgba(56,189,248,0.1)', border:'1px solid rgba(56,189,248,0.3)',
                    color:'#7dd3fc', padding:'2px 10px', borderRadius:'9999px', fontSize:'0.75rem'
                  }}>
                    {token.type}
                  </span>
                </td>
                <td style={{fontSize:'0.8rem', fontFamily:'monospace', color:'#94a3b8'}}>{token.location}</td>
                <td>
                  <span className={token.status === 'tripped' ? 'badge badge-tripped' : 'badge badge-green'}>
                    {token.status === 'tripped' ? '🔴 tripped' : '🟢 active'}
                  </span>
                </td>
                <td style={{fontWeight:700, color: token.tripCount > 0 ? '#f87171' : '#4ade80'}}>{token.tripCount}</td>
                <td style={{fontSize:'0.75rem', color:'#64748b'}}>
                  {token.lastTripped ? new Date(token.lastTripped).toLocaleString() : '—'}
                </td>
                <td style={{fontSize:'0.75rem', color:'#64748b'}}>{new Date(token.createdAt).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}
