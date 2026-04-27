<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"/><meta name="viewport" content="width=device-width,initial-scale=1"/>
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;600;700&display=swap" rel="stylesheet"/>
<style>
*{box-sizing:border-box;margin:0;padding:0;}
body{padding:20px 24px;background:#fffdfa;font-family:'DM Sans',sans-serif;color:#102040;}
.row{display:flex;align-items:center;gap:16px;margin-bottom:12px;}
.bar-wrap{flex:1;}
.bar{background:#B80000;height:8px;}
.token{font-size:0.65rem;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#4a5a7a;width:120px;flex-shrink:0;}
.val{font-size:0.65rem;font-family:monospace;color:#102040;width:50px;}
.section{margin-bottom:20px;padding-bottom:16px;border-bottom:1px solid #f0ebe0;}
.section-head{font-size:0.58rem;font-weight:700;letter-spacing:0.18em;text-transform:uppercase;color:#B80000;margin-bottom:12px;}
.radius-row{display:flex;gap:12px;flex-wrap:wrap;align-items:flex-end;}
.radius-box{background:#102040;display:flex;align-items:flex-end;justify-content:center;padding-bottom:4px;}
.radius-label{font-size:0.58rem;color:#4a5a7a;text-align:center;margin-top:4px;font-family:monospace;}
</style></head>
<body>
<div class="section">
  <div class="section-head">Spacing Scale</div>
  <div class="row"><span class="token">XS</span><span class="val">4px</span><div class="bar-wrap"><div class="bar" style="width:4px;"></div></div></div>
  <div class="row"><span class="token">SM</span><span class="val">8px</span><div class="bar-wrap"><div class="bar" style="width:8px;"></div></div></div>
  <div class="row"><span class="token">MD</span><span class="val">16px</span><div class="bar-wrap"><div class="bar" style="width:16px;"></div></div></div>
  <div class="row"><span class="token">LG</span><span class="val">24px</span><div class="bar-wrap"><div class="bar" style="width:24px;"></div></div></div>
  <div class="row"><span class="token">XL</span><span class="val">32px</span><div class="bar-wrap"><div class="bar" style="width:32px;"></div></div></div>
  <div class="row"><span class="token">2XL</span><span class="val">48px</span><div class="bar-wrap"><div class="bar" style="width:48px;"></div></div></div>
  <div class="row"><span class="token">Section</span><span class="val">80px</span><div class="bar-wrap"><div class="bar" style="width:80px;"></div></div></div>
  <div class="row"><span class="token">Max Width</span><span class="val">1100px</span><div class="bar-wrap"><div class="bar" style="width:110px;"></div></div></div>
</div>
<div class="section">
  <div class="section-head">Border Radius — Always 0</div>
  <div class="radius-row">
    <div>
      <div class="radius-box" style="width:40px;height:40px;border-radius:0;"></div>
      <div class="radius-label">0px<br/>All UI</div>
    </div>
    <div style="font-size:0.75rem;color:#4a5a7a;max-width:200px;line-height:1.5;">Sharp square corners are a core brand motif — cards, buttons, inputs, and tags are always rectangular with zero radius.</div>
  </div>
</div>
<div>
  <div class="section-head">Borders & Dividers</div>
  <div style="display:flex;flex-direction:column;gap:10px;">
    <div style="display:flex;align-items:center;gap:12px;"><div style="width:100%;height:1px;background:#b0a890;"></div><span style="font-size:0.62rem;color:#4a5a7a;white-space:nowrap;">1px hairline #b0a890</span></div>
    <div style="display:flex;align-items:center;gap:12px;"><div style="width:48px;height:3px;background:#B80000;"></div><span style="font-size:0.62rem;color:#4a5a7a;">3px red rule divider</span></div>
    <div style="display:flex;align-items:center;gap:12px;"><div style="width:48px;height:3px;background:#C9A84C;"></div><span style="font-size:0.62rem;color:#4a5a7a;">3px gold rule (VSYC)</span></div>
    <div style="display:flex;align-items:center;gap:12px;"><div style="width:40px;height:40px;background:#fff;border:1px solid #b0a890;border-top:3px solid #B80000;"></div><span style="font-size:0.62rem;color:#4a5a7a;">Card: top-3px accent + 1px border</span></div>
    <div style="display:flex;align-items:center;gap:12px;"><div style="width:40px;height:40px;background:#fff;border:1px solid #b0a890;border-left:4px solid #102040;"></div><span style="font-size:0.62rem;color:#4a5a7a;">Doc card: left-4px navy accent</span></div>
  </div>
</div>
</body></html>
