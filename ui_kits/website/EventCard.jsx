// EventCard.jsx — Monthly meetup event card and section

const EventCard = ({ month, date, year, imgSrc, rsvpUrl, isPast = false }) => (
  <div className={`event-card${isPast ? ' past' : ''}`}>
    {imgSrc && (
      <div className="event-img">
        <img src={imgSrc} alt={`${month} ${year} meetup`} />
      </div>
    )}
    <div className="event-body">
      {isPast && <span className="event-past">PAST EVENT</span>}
      <div className="event-eyebrow">MONTHLY MEETUP</div>
      <div className="event-title">{month} {year}</div>
      <div className="event-meta">
        {date} · 1–4 PM · Arlington Central Library<br/>
        <span className="event-meta-sub">Barbara M. Donnellan Auditorium</span>
      </div>
      {!isPast && rsvpUrl && (
        <a href={rsvpUrl} target="_blank" rel="noopener noreferrer" className="btn btn-red btn-sm">RSVP FREE →</a>
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
    <section className="bg-white">
      <div className="section">
        <div className="red-tag">UPCOMING MEETUPS</div>
        <h2 className="section-title">Monthly Meetups</h2>
        <hr className="divider" />

        <div className="events-grid">
          {events.map(e => <EventCard key={e.month} {...e} rsvpUrl="#" />)}
        </div>

        <div className="event-banner">
          <div>
            <div className="event-banner-label">ALWAYS FREE · NO REGISTRATION REQUIRED</div>
            <div className="event-banner-title">Every 3rd Sunday, 1–4 PM</div>
            <div className="event-banner-sub">Arlington Central Library · 1015 N Quincy St, Arlington VA 22201</div>
          </div>
          <a href="#" className="btn btn-red">GET DIRECTIONS →</a>
        </div>
      </div>
    </section>
  );
};

Object.assign(window, { EventCard, EventsSection });
