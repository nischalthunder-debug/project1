import { demoStore } from "@/lib/demo-data"

export default function PricingPage() {
  const { pricing } = demoStore

  return (
    <>
      <h1 className="page-title">Pricing Plans</h1>
      <p className="page-sub">Choose the right plan for your API security needs</p>

      <div className="demo-bar">
        ℹ️ Demo mode — contact form submissions are logged but not stored persistently
      </div>

      <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(280px,1fr))', gap:'1.5rem', marginBottom:'2rem'}}>
        {pricing.map(plan => (
          <div key={plan.id} className="card" style={{
            position:'relative',
            border: plan.recommended ? '2px solid #0ea5e9' : '1px solid #334155'
          }}>
            {plan.recommended && (
              <div style={{
                position:'absolute', top:'-12px', left:'50%', transform:'translateX(-50%)',
                background:'#0ea5e9', color:'white', padding:'2px 16px', borderRadius:'9999px',
                fontSize:'0.75rem', fontWeight:700
              }}>
                RECOMMENDED
              </div>
            )}
            <div style={{fontSize:'1.25rem', fontWeight:700, color:'#f1f5f9', marginBottom:'0.5rem'}}>{plan.name}</div>
            <div style={{fontSize:'0.875rem', color:'#64748b', marginBottom:'1.5rem'}}>{plan.description}</div>
            <div style={{marginBottom:'1.5rem'}}>
              <span style={{fontSize:'2.5rem', fontWeight:800, color:'#f1f5f9'}}>${plan.monthlyPrice}</span>
              <span style={{color:'#64748b'}}>/mo</span>
              <div style={{fontSize:'0.75rem', color:'#64748b', marginTop:'0.25rem'}}>
                ${plan.annualPrice}/yr (save {Math.round((1 - plan.annualPrice/(plan.monthlyPrice*12))*100)}%)
              </div>
            </div>
            <ul style={{listStyle:'none', display:'flex', flexDirection:'column', gap:'0.625rem', marginBottom:'1.5rem'}}>
              {plan.features.map(f => (
                <li key={f} style={{display:'flex', alignItems:'flex-start', gap:'0.5rem', fontSize:'0.875rem', color:'#cbd5e1'}}>
                  <span style={{color:'#4ade80', flexShrink:0}}>✓</span> {f}
                </li>
              ))}
            </ul>
            <a href="#contact-sales" style={{
              display:'block', textAlign:'center', padding:'0.75rem',
              background: plan.recommended ? '#0ea5e9' : '#334155',
              color:'white', borderRadius:'8px', fontWeight:600, fontSize:'0.875rem',
              transition:'opacity 0.15s'
            }}>
              Get Started with {plan.name}
            </a>
          </div>
        ))}
      </div>

      <div className="card" style={{maxWidth:520}} id="contact-sales">
        <div className="section-title">Contact Sales</div>
        <p style={{fontSize:'0.875rem', color:'#64748b', marginBottom:'1.25rem'}}>
          Need a custom plan? Submit your details and we will be in touch.
        </p>
        <form action="/api/pricing" method="POST" style={{display:'flex', flexDirection:'column', gap:'0.875rem'}}>
          <div>
            <label style={{display:'block', fontSize:'0.75rem', color:'#94a3b8', marginBottom:'0.375rem'}}>Name</label>
            <input name="name" required style={{
              width:'100%', background:'#0f172a', border:'1px solid #334155', borderRadius:'8px',
              padding:'0.625rem 0.875rem', color:'#e2e8f0', fontSize:'0.875rem', outline:'none'
            }} />
          </div>
          <div>
            <label style={{display:'block', fontSize:'0.75rem', color:'#94a3b8', marginBottom:'0.375rem'}}>Email</label>
            <input name="email" type="email" required style={{
              width:'100%', background:'#0f172a', border:'1px solid #334155', borderRadius:'8px',
              padding:'0.625rem 0.875rem', color:'#e2e8f0', fontSize:'0.875rem', outline:'none'
            }} />
          </div>
          <div>
            <label style={{display:'block', fontSize:'0.75rem', color:'#94a3b8', marginBottom:'0.375rem'}}>Company</label>
            <input name="company" style={{
              width:'100%', background:'#0f172a', border:'1px solid #334155', borderRadius:'8px',
              padding:'0.625rem 0.875rem', color:'#e2e8f0', fontSize:'0.875rem', outline:'none'
            }} />
          </div>
          <button type="submit" style={{
            background:'#0ea5e9', color:'white', padding:'0.75rem', borderRadius:'8px',
            fontWeight:600, fontSize:'0.875rem', cursor:'pointer', border:'none'
          }}>
            Send Inquiry
          </button>
        </form>
      </div>
    </>
  )
}
