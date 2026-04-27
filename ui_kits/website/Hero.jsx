// Hero.jsx — Full-screen navy hero with dot pattern, DC skyline ornament

const Hero = () => (
  <section style={{
    background: 'var(--navy)', position: 'relative',
    overflow: 'hidden', minHeight: '80vh', display: 'flex', alignItems: 'center'
  }}>
    {/* Dot pattern */}
    <div style={{
      position: 'absolute', inset: 0, opacity: 0.06,
      backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
      backgroundSize: '32px 32px'
    }} />

    {/* Content */}
    <div style={{
      maxWidth: 1100, margin: '0 auto', padding: '80px 24px 140px',
      position: 'relative', zIndex: 1,
      display: 'grid', gridTemplateColumns: '1fr auto', gap: 40, alignItems: 'center', width: '100%'
    }}>
      <div>
        <div style={{
          display: 'inline-block', background: 'var(--red)', color: '#fff',
          fontSize: '0.65rem', letterSpacing: '0.18em', padding: '4px 12px',
          fontWeight: 700, marginBottom: 18
        }}>
          EST. 2021 · DC / MD / VA
        </div>
        <h1 style={{
          fontFamily: 'var(--font-display)', fontWeight: 900,
          fontSize: 'clamp(3rem, 8vw, 5.5rem)', color: '#fff',
          lineHeight: 0.95, marginBottom: 10
        }}>
          DMV<br/>THROWERS
        </h1>
        <p style={{
          fontSize: '0.78rem', letterSpacing: '0.22em', color: 'var(--red)',
          fontWeight: 700, marginBottom: 22
        }}>
          YO-YO & SKILL TOY CLUB · DC · MD · VA
        </p>
        <p style={{ fontSize: '1.05rem', color: '#c8d0e0', lineHeight: 1.7, maxWidth: 480, marginBottom: 32 }}>
          The Mid-Atlantic's home for yo-yo enthusiasts, kendama players, and all skill toy fans in Washington DC, Northern Virginia, and Maryland. All ages, all levels, always free.
        </p>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <a href="#" style={{
            background: 'var(--red)', color: '#fff', padding: '14px 32px',
            fontWeight: 700, letterSpacing: '0.095em', fontSize: '0.82rem',
            textDecoration: 'none', display: 'inline-flex', alignItems: 'center', minHeight: 44
          }}>
            SEE UPCOMING MEETUPS
          </a>
          <a href="#" style={{
            background: 'transparent', border: '2px solid #fff', color: '#fff',
            padding: '14px 32px', fontWeight: 700, letterSpacing: '0.095em', fontSize: '0.82rem',
            textDecoration: 'none', display: 'inline-flex', alignItems: 'center', minHeight: 44
          }}>
            JOIN A MEETUP
          </a>
        </div>
      </div>

      {/* Logo */}
      <div>
        <img src="../../assets/logos/dmvt-logo.png" alt="DMV Throwers" style={{
          width: 180, height: 180, objectFit: 'contain',
          opacity: 0.9, filter: 'brightness(0) invert(1)'
        }} />
      </div>
    </div>

    {/* DC skyline decoration */}
    <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 80, pointerEvents: 'none' }}>
      <img src="../../assets/images/dc-skyline.svg" alt="" aria-hidden="true"
        style={{ width: '100%', height: 80, opacity: 0.18, display: 'block' }} />
    </div>
  </section>
);

Object.assign(window, { Hero });
