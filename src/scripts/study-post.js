const bar = document.querySelector('#progress');
let scheduled = false;
function updateProgress() {
  const page = document.documentElement;
  const range = page.scrollHeight - page.clientHeight;
  const percentage = range > 0 ? Math.min(100, Math.max(0, page.scrollTop / range * 100)) : 100;
  if (bar) bar.style.width = `${percentage}%`;
  scheduled = false;
}
function scheduleProgress() {
  if (!scheduled) { scheduled = true; requestAnimationFrame(updateProgress); }
}
window.addEventListener('scroll', scheduleProgress, { passive: true });
window.addEventListener('resize', scheduleProgress);
window.addEventListener('load', scheduleProgress);
document.addEventListener('load', scheduleProgress, true);
new ResizeObserver(scheduleProgress).observe(document.body);
updateProgress();

const answers = [...document.querySelectorAll('.study section details')];
let previous;
window.addEventListener('beforeprint', () => {
  if (previous) return;
  previous = answers.map(answer => answer.open);
  answers.forEach(answer => { answer.open = true; });
});
window.addEventListener('afterprint', () => {
  answers.forEach((answer, i) => { answer.open = previous?.[i] ?? answer.open; });
  previous = undefined;
  scheduleProgress();
});
document.querySelector('#print')?.addEventListener('click', () => window.print());

// Retornos para respostas recolhidas abrem o conteúdo antes da navegação ao destino.
function revealHashTarget() {
  if (!location.hash) return;
  let id;
  try { id = decodeURIComponent(location.hash.slice(1)); } catch { return; }
  const target = document.getElementById(id);
  if (!target) return;
  let parent = target.parentElement;
  while (parent) {
    if (parent instanceof HTMLDetailsElement) parent.open = true;
    parent = parent.parentElement;
  }
  requestAnimationFrame(() => target.scrollIntoView());
}
window.addEventListener('hashchange', revealHashTarget);
revealHashTarget();
