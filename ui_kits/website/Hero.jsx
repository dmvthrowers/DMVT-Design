// Hero.jsx — Full-screen navy hero with dot pattern, DC skyline ornament

const Hero = () => (
  <section className="hero">
    {/* Dot pattern */}
    <div className="hero-dots" />

    {/* Content */}
    <div className="hero-inner">
      <div>
        <div className="hero-tag">EST. 2021 · DC / MD / VA</div>
        <h1 className="hero-title">DMV<br/>THROWERS</h1>
        <p className="hero-subtitle">YO-YO & SKILL TOY CLUB · DC · MD · VA</p>
        <p className="hero-desc">
          The Mid-Atlantic's home for yo-yo enthusiasts, kendama players, and all skill toy fans in Washington DC, Northern Virginia, and Maryland. All ages, all levels, always free.
        </p>
        <div className="hero-btns">
          <a href="#" className="btn btn-red">SEE UPCOMING MEETUPS</a>
          <a href="#" className="btn btn-outline-white">JOIN A MEETUP</a>
        </div>
      </div>

      {/* Logo */}
      <div className="hero-logo">
        <img src="../../assets/logos/dmvt-logo.png" alt="DMV Throwers" />
      </div>
    </div>

    {/* DC skyline decoration */}
    <div className="hero-skyline">
      <img src="../../assets/images/dc-skyline.svg" alt="" aria-hidden="true" />
    </div>
  </section>
);

Object.assign(window, { Hero });
