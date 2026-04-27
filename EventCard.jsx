<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"/><meta name="viewport" content="width=device-width,initial-scale=1"/>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@900&family=DM+Sans:wght@400;600;700&display=swap" rel="stylesheet"/>
<style>
*{box-sizing:border-box;margin:0;padding:0;}
body{padding:20px 24px;background:#fffdfa;font-family:'DM Sans',sans-serif;}
.row{margin-bottom:18px;padding-bottom:18px;border-bottom:1px solid #f0ebe0;}
.row:last-child{border-bottom:none;margin-bottom:0;}
.section-label{font-size:0.58rem;font-weight:700;letter-spacing:0.16em;text-transform:uppercase;color:#4a5a7a;margin-bottom:10px;}
.flex{display:flex;flex-wrap:wrap;gap:8px;align-items:center;}
/* Section tag */
.red-tag{display:inline-block;background:#B80000;color:#fff;font-size:0.62rem;letter-spacing:0.18em;padding:4px 12px;font-weight:700;text-transform:uppercase;}
.gold-tag{display:inline-block;background:#C9A84C;color:#0d1428;font-size:0.62rem;letter-spacing:0.18em;padding:4px 12px;font-weight:800;text-transform:uppercase;}
/* Pills */
.pill{display:inline-block;background:#102040;color:#fff;font-size:0.7rem;letter-spacing:0.08em;padding:5px 14px;font-weight:600;}
/* Divider */
.divider{width:48px;height:3px;background:#B80000;border:none;}
.divider-gold{width:48px;height:3px;background:#C9A84C;border:none;}
/* Nav link active */
.nav-link{font-size:0.72rem;font-weight:600;letter-spacing:0.11em;text-transform:uppercase;color:#102040;padding-bottom:4px;border-bottom:2px solid transparent;text-decoration:none;}
.nav-link.active{color:#B80000;border-bottom-color:#B80000;}
</style></head>
<body>
<div class="row">
  <div class="section-label">Section Eyebrow Tags</div>
  <div class="flex">
    <span class="red-tag">ABOUT US</span>
    <span class="red-tag">EVENTS</span>
    <span class="gold-tag">VSYC-26</span>
    <span class="gold-tag">DIVISIONS</span>
  </div>
</div>
<div class="row">
  <div class="section-label">Red + Gold Dividers</div>
  <div class="flex" style="align-items:flex-start;flex-direction:column;gap:10px;">
    <hr class="divider"/>
    <hr class="divider-gold"/>
  </div>
</div>
<div class="row">
  <div class="section-label">Skill Toy Pills</div>
  <div class="flex">
    <span class="pill">Yo-Yo</span>
    <span class="pill">Kendama</span>
    <span class="pill">Diabolo</span>
    <span class="pill">Skill Toys</span>
    <span class="pill">All Ages</span>
  </div>
</div>
<div class="row">
  <div class="section-label">Nav Links</div>
  <div class="flex">
    <a class="nav-link active" href="#">ABOUT</a>
    <a class="nav-link" href="#">EVENTS</a>
    <a class="nav-link" href="#">GALLERY</a>
    <a class="nav-link" href="#">RESOURCES</a>
  </div>
</div>
</body></html>
