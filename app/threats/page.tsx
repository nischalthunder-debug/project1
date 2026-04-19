import { demoStore } from "@/lib/demo-data"

export default function ThreatsPage() {
  const { threats } = demoStore

  return (
    <>
      <h1 className="page-title">Threat Intelligence</h1>
      <p className="page-sub">AI-scored threats detected across your API surface</p>

      <div className="demo-bar">
        ℹ️ Demo mode — showing {threats.length} synthetic threats
      </div>

      <div className="card">
        <table className="table">
          <thead>
            <tr>
              <th>IP Address</th>
              <th>Technique</th>
              <th>Score</th>
              <th>Risk</th>
              <th>Status</th>
              <th>Requests</th>
              <th>Location</th>
              <th>Last Seen</th>
            </tr>
          </thead>
          <tbody>
            {threats.map(threat => (
              <tr key={threat.id}>
                <td><code style={{background:'#0f172a', padding:'2px 8px', borderRadius:'4px', fontSize:'0.8rem'}}>{threat.ipAddress}</code></td>
                <td>{threat.technique}</td>
                <td>
                  <div style={{display:'flex', alignItems:'center', gap:'0.5rem'}}>
                    <div style={{
                      width: 36, height: 36, borderRadius: '50%', display:'flex', alignItems:'center', justifyContent:'center',
                      background: threat.score >= 80 ? 'rgba(239,68,68,0.2)' : threat.score >= 60 ? 'rgba(249,115,22,0.2)' : 'rgba(234,179,8,0.2)',
                      color: threat.score >= 80 ? '#f87171' : threat.score >= 60 ? '#fb923c' : '#facc15',
                      fontWeight: 700, fontSize:'0.875rem'
                    }}>
                      {threat.score}
                    </div>
                  </div>
                </td>
                <td><span className={`badge badge-${threat.riskLevel}`}>{threat.riskLevel}</span></td>
                <td><span className={`badge badge-${threat.status}`}>{threat.status}</span></td>
                <td>{threat.requestCount.toLocaleString()}</td>
                <td style={{fontSize:'0.8rem'}}>{threat.geoLocation}</td>
                <td style={{fontSize:'0.75rem', color:'#64748b'}}>{new Date(threat.lastSeen).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}
