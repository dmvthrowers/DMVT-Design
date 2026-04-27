// Nav.jsx — DMV Throwers main site navigation
// Sticky cream nav + red top bar, brand lockup, nav links with active state

const Nav = ({ activePage = 'about' }) => {
  const links = [
    { id: 'about', label: 'ABOUT', href: '#' },
    { id: 'team', label: 'TEAM', href: '#' },
    { id: 'events', label: 'EVENTS', href: '#' },
    { id: 'gallery', label: 'GALLERY', href: '#' },
    { id: 'resources', label: 'RESOURCES', href: '#' },
    { id: 'faq', label: 'FAQ', href: '#' },
    { id: 'contact', label: 'CONTACT', href: '#' },
  ];

  return (
    <div>
      {/* Top bar */}
      <div style={{
        background: 'var(--red)', padding: '8px 24px',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        gap: 12, flexWrap: 'wrap'
      }}>
        <span style={{ fontSize: '0.7rem', color: '#fff', letterSpacing: '0.12em', fontWeight: 600 }}>
          NEXT MEET: MAY 18, 2026 · ARLINGTON CENTRAL LIBRARY · ARLINGTON VA
        </span>
        <a href="#" style={{ fontSize: '0.7rem', color: '#fff', fontWeight: 700, letterSpacing: '0.1em', textDecoration: 'underline', whiteSpace: 'nowrap' }}>
          RSVP →
        </a>
      </div>

      {/* Main nav */}
      <nav style={{
        background: 'var(--cream)', borderBottom: '1px solid var(--border)',
        padding: '0 24px', position: 'sticky', top: 0, zIndex: 200
      }}>
        <div style={{
          maxWidth: 1100, margin: '0 auto',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64
        }}>
          {/* Brand */}
          <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none' }}>
            <img src="../../assets/logos/dmvt-logo.png" alt="DMV Throwers" style={{ width: 38, height: 38, objectFit: 'contain' }} />
            <div>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: '1.1rem', color: 'var(--navy)', lineHeight: 1 }}>
                DMV THROWERS
              </div>
              <div style={{ fontSize: '0.6rem', letterSpacing: '0.18em', color: 'var(--red)', fontWeight: 700, marginTop: 2 }}>
                YO-YO & SKILL TOY CLUB
              </div>
            </div>
          </a>

          {/* Links */}
          <div style={{ display: 'flex', gap: 22, alignItems: 'center' }}>
            {links.map(l => (
              <a key={l.id} href={l.href} style={{
                fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.11em',
                color: activePage === l.id ? 'var(--red)' : 'var(--navy)',
                textDecoration: 'none', padding: '6px 0',
                borderBottom: activePage === l.id ? '2px solid var(--red)' : '2px solid transparent',
                transition: 'color 0.2s, border-color 0.2s'
              }}>
                {l.label}
              </a>
            ))}
            <a href="#" style={{
              background: '#13C3A3', color: '#fff', padding: '7px 14px',
              fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.1em',
              textDecoration: 'none', whiteSpace: 'nowrap'
            }}>☕ DONATE</a>
            <a href="#" style={{
              background: 'var(--navy)', color: '#fff', padding: '7px 14px',
              fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.1em',
              textDecoration: 'none', whiteSpace: 'nowrap'
            }}>VSYC-26 →</a>
          </div>
        </div>
      </nav>
    </div>
  );
};

Object.assign(window, { Nav });
