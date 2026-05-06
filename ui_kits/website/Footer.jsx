// Footer.jsx — DMV Throwers site footer

const Footer = () => (
  <footer>
    <div className="footer-inner">
      <div className="footer-top">
        {/* Brand */}
        <div className="footer-brand">
          <img src="../../assets/logos/dmvt-logo.png" alt="DMV Throwers" className="footer-logo" />
          <div>
            <div className="footer-title">DMV THROWERS</div>
            <div className="footer-sub">YO-YO & SKILL TOY CLUB</div>
          </div>
        </div>

        {/* Links */}
        <div>
          {['About', 'Events', 'Gallery', 'Team', 'Resources', 'FAQ', 'Contact'].map(l => (
            <a key={l} href="#" className="footer-link">{l}</a>
          ))}
        </div>
      </div>

      <div className="footer-bottom">
        <span className="footer-copy">
          © 2021–2026 DMV Throwers Yo-Yo & Skill Toy Club · Arlington, VA · contact@dmvthrowers.club
        </span>
        <div>
          <a href="#" className="footer-legal-link">Privacy</a>
          <a href="#" className="footer-legal-link">Code of Conduct</a>
        </div>
      </div>
    </div>
  </footer>
);

Object.assign(window, { Footer });
