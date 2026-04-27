// EventCard.jsx — Monthly meetup event card and section

const EventCard = ({ month, date, year, imgSrc, rsvpUrl, isPast = false }) => (
  <div style={{
    background: '#fff', border: '1px solid var(--border)',
    borderTop: '3px solid var(--red)', opacity: isPast ? 0.55 : 1
  }}>
    {imgSrc && (
      <div style={{ aspectRatio: '16/7', overflow: 'hidden' }}>
        <img src={imgSrc} alt={`${month} ${year} meetup`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>
    )}
    <div style={{ padding: '20px 24px 24px' }}>
      {isPast && (
        <span style={{
          background: 'var(--border)', color: 'var(--navy)', fontSize: '0.62rem',
          letterSpacing: '0.14em', padding: '3px 10px', fontWeight: 700,
          display: 'inline-block', marginBottom: 10
        }}>PAST EVENT</span>
      )}
      <div style={{ fontSize: '0.65rem', letterSpacing: '0.18em', color: 'var(--red)', fontWeight: 700, marginBottom: 6 }}>
        MONTHLY MEETUP
      </div>
      <div style={{
        fontFamily: 'var(--font-display)', fontWeight: 900,
        fontSize: '1.4rem', color: 'var(--navy)', marginBottom: 4
      }}>
        {month} {year}
      </div>
      <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: 16, lineHeight: 1.5 }}>
        {date} · 1–4 PM · Arlington Central Library<br/>
        <span style={{ fontSize: '0.78rem' }}>Barbara M. Donnellan Auditorium</span>
      </div>
      {!isPast && rsvpUrl && (
        <a href={rsvpUrl} target="_blank" rel="noopener noreferrer" style={{
          background: 'var(--red)', color: '#fff', padding: '10px 20px',
          fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em',
          textDecoration: 'none', display: 'inline-block'
        }}>RSVP FREE →</a>
      )}
    </div>
  </div>
);

const EventsSection = () => {
  const events = [
    { month: 'May', date: 'Sunday, May 18', year: 2026, isPast: false },
    { month: 'June', date: 'Sunday, June 15', year: 2026, isPast: false },
    { month: 'July', date: 'Sunday, July 20', year: 2026, isPast: false },
    { month: 'April', date: 'Sunday, April 19', year: 2026, isPast: true },
  ];

  return (
    <section style={{ background: '#fff' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '80px 24px' }}>
        <div style={{
          display: 'inline-block', background: 'var(--red)', color: '#fff',
          fontSize: '0.65rem', letterSpacing: '0.18em', padding: '4px 12px',
          fontWeight: 700, marginBottom: 16
        }}>UPCOMING MEETUPS</div>
        <h2 style={{
          fontFamily: 'var(--font-display)', fontWeight: 900,
          fontSize: 'clamp(2rem, 5vw, 3rem)', color: 'var(--navy)', marginBottom: 8
        }}>Monthly Meetups</h2>
        <div style={{ width: 48, height: 3, background: 'var(--red)', margin: '16px 0 32px' }} />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 20 }}>
          {events.map(e => <EventCard key={e.month} {...e} rsvpUrl="#" />)}
        </div>

        <div style={{
          marginTop: 48, background: 'var(--navy)', color: '#fff',
          padding: '28px 32px', display: 'flex', justifyContent: 'space-between',
          alignItems: 'center', flexWrap: 'wrap', gap: 16
        }}>
          <div>
            <div style={{ fontSize: '0.62rem', letterSpacing: '0.18em', color: 'var(--red)', fontWeight: 700, marginBottom: 8 }}>
              ALWAYS FREE · NO REGISTRATION REQUIRED
            </div>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: '1.4rem', color: '#fff' }}>
              Every 3rd Sunday, 1–4 PM
            </div>
            <div style={{ fontSize: '0.85rem', color: '#8090b8', marginTop: 4 }}>
              Arlington Central Library · 1015 N Quincy St, Arlington VA 22201
            </div>
          </div>
          <a href="#" style={{
            background: 'var(--red)', color: '#fff', padding: '14px 28px',
            fontWeight: 700, fontSize: '0.82rem', letterSpacing: '0.1em', textDecoration: 'none', whiteSpace: 'nowrap'
          }}>GET DIRECTIONS →</a>
        </div>
      </div>
    </section>
  );
};

Object.assign(window, { EventCard, EventsSection });
