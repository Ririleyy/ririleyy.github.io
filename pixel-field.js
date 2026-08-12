(() => {
  const field = document.getElementById('pixelField');
  if (!field) return;
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const colors = ['var(--ink)', 'var(--accent)', 'var(--support)'];
  const count = 24;
  const frag = document.createDocumentFragment();
  for (let i = 0; i < count; i++) {
    const px = document.createElement('span');
    const size = 1 + Math.round(Math.random());
    px.style.width = size + 'px';
    px.style.height = size + 'px';
    px.style.left = (Math.random() * 100).toFixed(2) + 'vw';
    px.style.top = (Math.random() * 100).toFixed(2) + 'vh';
    px.style.background = colors[i % colors.length];
    px.style.opacity = (0.06 + Math.random() * 0.16).toFixed(2);
    if (!reduceMotion) {
      const dur = (3.5 + Math.random() * 3) + 's';
      const delay = (Math.random() * 4).toFixed(2) + 's';
      px.style.animation = `pixel-twinkle ${dur} ease-in-out ${delay} infinite`;
    }
    frag.appendChild(px);
  }
  field.appendChild(frag);
})();
