// Footer.jsx — DMV Throwers site footer

const Footer = () => (
  <footer style={{ background: 'var(--navy)', padding: '40px 24px 24px' }}>
    <div style={{ maxWidth: 1100, margin: '0 auto' }}>
      <div style={{
        display: 'flex', justifyContent: 'space-between',
        alignItems: 'center', flexWrap: 'wrap', gap: 20, marginBottom: 28
      }}>
        {/* Brand */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <img src="../../assets/logos/dmvt-logo.png" alt="DMV Throwers"
            style={{ width: 34, height: 34, objectFit: 'contain', filter: 'brightness(0) invert(1)', opacity: 0.8 }} />
          <div>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: '1rem', color: '#fff' }}>
              DMV THROWERS
            </div>
            <div style={{ fontSize: '0.6rem', letterSpacing: '0.16em', color: '#8a0000', fontWeight: 700 }}>
              YO-YO & SKILL TOY CLUB
            </div>
          </div>
        </div>

        {/* Links */}
        <div>
          {['About', 'Events', 'Gallery', 'Team', 'Resources', 'FAQ', 'Contact'].map(l => (
            <a key={l} href="#" style={{
              color: '#8fa8d8', fontSize: '0.8rem', textDecoration: 'none',
              margin: '0 10px', transition: 'color 0.2s'
            }}>{l}</a>
          ))}
        </div>
      </div>

      <div style={{ borderTop: '1px solid #2a3a5a', paddingTop: 20, display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8 }}>
        <span style={{ fontSize: '0.75rem', color: '#fff' }}>
          © 2021–2026 DMV Throwers Yo-Yo & Skill Toy Club · Arlington, VA · contact@dmvthrowers.club
        </span>
        <div>
          <a href="#" style={{ color: '#8fa8d8', fontSize: '0.75rem', textDecoration: 'none', marginLeft: 16 }}>Privacy</a>
          <a href="#" style={{ color: '#8fa8d8', fontSize: '0.75rem', textDecoration: 'none', marginLeft: 16 }}>Code of Conduct</a>
        </div>
      </div>
    </div>
  </footer>
);

Object.assign(window, { Footer });
