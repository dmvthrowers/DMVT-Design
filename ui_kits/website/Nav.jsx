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
      <div className="top-bar">
        <span className="top-bar-text">
          NEXT MEET: MAY 18, 2026 · ARLINGTON CENTRAL LIBRARY · ARLINGTON VA
        </span>
        <a href="#" className="top-bar-link">
          RSVP →
        </a>
      </div>

      {/* Main nav */}
      <nav>
        <div className="nav-inner">
          {/* Brand */}
          <a href="#" className="nav-brand">
            <img src="../../assets/logos/dmvt-logo.png" alt="DMV Throwers" />
            <div>
              <div className="nav-brand-main">DMV THROWERS</div>
              <div className="nav-brand-sub">YO-YO & SKILL TOY CLUB</div>
            </div>
          </a>

          {/* Links */}
          <div className="nav-links">
            {links.map(l => (
              <a key={l.id} href={l.href} className={`nav-link${activePage === l.id ? ' active' : ''}`}>
                {l.label}
              </a>
            ))}
            <a href="#" className="nav-link nav-donate">☕ DONATE</a>
            <a href="#" className="nav-link nav-vsyc">VSYC-26 →</a>
          </div>
        </div>
      </nav>
    </div>
  );
};

Object.assign(window, { Nav });
