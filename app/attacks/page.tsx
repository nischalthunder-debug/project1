import { demoStore } from "@/lib/demo-data"

export default function AttacksPage() {
  const { attacks } = demoStore

  return (
    <>
      <h1 className="page-title">Attack Profiles</h1>
      <p className="page-sub">Forensic analysis of detected attack campaigns</p>

      <div className="demo-bar">
        ℹ️ Demo mode — {attacks.length} attack profiles
      </div>

      <div style={{display:'flex', flexDirection:'column', gap:'1.5rem'}}>
        {attacks.map(attack => (
          <div key={attack.id} className="card">
            <div style={{display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:'1rem'}}>
              <div>
                <div style={{fontSize:'1.125rem', fontWeight:700, color:'#f1f5f9', marginBottom:'0.25rem'}}>
                  {attack.technique}
                </div>
                <div style={{fontSize:'0.75rem', color:'#64748b', fontFamily:'monospace'}}>
                  Fingerprint: {attack.fingerprint}
                </div>
              </div>
              <div style={{textAlign:'right'}}>
                <div style={{fontSize:'0.75rem', color:'#64748b', marginBottom:'0.25rem'}}>Confidence</div>
                <div style={{fontSize:'1.5rem', fontWeight:700, color:'#38bdf8'}}>
                  {Math.round(attack.attributionConfidence * 100)}%
                </div>
              </div>
            </div>

            <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(160px,1fr))', gap:'1rem', marginBottom:'1rem'}}>
              <div>
                <div style={{fontSize:'0.7rem', color:'#64748b', textTransform:'uppercase', marginBottom:'0.25rem'}}>Intent</div>
                <div style={{fontSize:'0.875rem', color:'#e2e8f0'}}>{attack.intent.replace('_', ' ')}</div>
              </div>
              <div>
                <div style={{fontSize:'0.7rem', color:'#64748b', textTransform:'uppercase', marginBottom:'0.25rem'}}>Total Requests</div>
                <div style={{fontSize:'0.875rem', color:'#e2e8f0'}}>{attack.totalRequests.toLocaleString()}</div>
              </div>
              <div>
                <div style={{fontSize:'0.7rem', color:'#64748b', textTransform:'uppercase', marginBottom:'0.25rem'}}>API Key Rotations</div>
                <div style={{fontSize:'0.875rem', color:'#e2e8f0'}}>{attack.apiKeyRotations}</div>
              </div>
              <div>
                <div style={{fontSize:'0.7rem', color:'#64748b', textTransform:'uppercase', marginBottom:'0.25rem'}}>Honeypot Time</div>
                <div style={{fontSize:'0.875rem', color:'#e2e8f0'}}>{attack.honeypotTimeMinutes.toLocaleString()} min</div>
              </div>
              <div>
                <div style={{fontSize:'0.7rem', color:'#64748b', textTransform:'uppercase', marginBottom:'0.25rem'}}>Actor Type</div>
                <div style={{fontSize:'0.875rem', color:'#e2e8f0'}}>{attack.estimatedActorType.replace('_', ' ')}</div>
              </div>
            </div>

            <div>
              <div style={{fontSize:'0.7rem', color:'#64748b', textTransform:'uppercase', marginBottom:'0.5rem'}}>MITRE ATT&amp;CK Techniques</div>
              <div style={{display:'flex', gap:'0.5rem', flexWrap:'wrap'}}>
                {attack.mitreTechniques.map(t => (
                  <span key={t} style={{
                    background:'rgba(56,189,248,0.1)', border:'1px solid rgba(56,189,248,0.3)',
                    color:'#7dd3fc', padding:'2px 10px', borderRadius:'9999px', fontSize:'0.75rem'
                  }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div style={{marginTop:'1rem'}}>
              <div style={{fontSize:'0.7rem', color:'#64748b', textTransform:'uppercase', marginBottom:'0.5rem'}}>IPs Involved</div>
              <div style={{display:'flex', gap:'0.5rem', flexWrap:'wrap'}}>
                {attack.ipAddresses.map(ip => (
                  <code key={ip} style={{background:'#0f172a', border:'1px solid #334155', color:'#94a3b8', padding:'2px 8px', borderRadius:'4px', fontSize:'0.75rem'}}>
                    {ip}
                  </code>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
