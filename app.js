const { books: BOOKS, worlds: WORLDS } = window.COSMERE_DATA;
const STORAGE_KEY = 'cosmere-atlas-progress-v2';
const PIN_HASH = 'e9cf0653c1f1de4720a1984d6b8f1f7caef8207edf46a7d7fdc4950522df12f1';
const $ = selector => document.querySelector(selector);
const pad = n => String(n).padStart(2, '0');
let history = readHistory();
let selectedWorld = 'scadrial';
let pendingAction = 'read';

function readHistory() {
  try {
    const raw = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    if (!Array.isArray(raw)) return [];
    const clean = [];
    for (const entry of raw) {
      const expected = BOOKS[5 + clean.length];
      if (!expected || entry.n !== expected.n || !['read', 'skipped'].includes(entry.status)) break;
      if (entry.status === 'skipped' && !expected.optional) break;
      clean.push({ n: entry.n, status: entry.status });
    }
    return clean;
  } catch { return []; }
}
function saveHistory(next) { localStorage.setItem(STORAGE_KEY, JSON.stringify(next)); history = next; }
function currentBook() { return BOOKS[5 + history.length] || null; }
function status(book) {
  if (book.n <= 5) return 'read';
  const entry = history[book.n - 6];
  return entry?.status || (currentBook()?.n === book.n ? 'next' : 'locked');
}
function availableBooks() { return BOOKS.filter(book => ['read', 'next'].includes(status(book))); }
function discoveredWorlds() { return [...new Set(availableBooks().map(book => book.world))]; }
function readCount() { return BOOKS.filter(book => status(book) === 'read').length; }
function esc(value) { return String(value).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]); }
function worldName(book) { return WORLDS[book.world]?.name || 'Destino por descubrir'; }
function teaser(book) { return book.teaser || 'La siguiente etapa de tu ruta. Su historia se abrirá cuando la marques como leída.'; }
function details(book) { return book.read || { summary: 'Lectura completada. Este destino ya está disponible en tu mapa estelar.', moments: [], characters: [], art: [] }; }
function cover(book, cls = '') {
  const title = book.arc ? 'Arcanum ilimitado' : book.title;
  return `<span class="${cls} cover-frame"><span class="cover-fallback" aria-hidden="true">${esc(title)}</span>${book.cover ? `<img src="${book.cover}" alt="Portada de ${esc(title)}" loading="lazy">` : ''}</span>`;
}

function renderProgress() {
  const count = readCount();
  $('#header-progress-text').textContent = `${count} de 32 leídos`;
  $('#footer-progress').textContent = `ATLAS PERSONAL DEL COSMERE · ${count} / 32`;
  $('#progress-percent').textContent = `${Math.round(count / 32 * 100)}%`;
  $('.progress-track').setAttribute('aria-valuenow', String(count));
  $('.progress-track span').style.width = `${count / 32 * 100}%`;
}
function renderNext() {
  const book = currentBook();
  if (!book) {
    $('#next-card').innerHTML = '<div class="next-card-top"><span class="pulse"></span> VIAJE COMPLETADO <span class="next-number">32 / 32</span></div><div class="next-card-inner"><div class="next-text"><span class="kicker">TODAS LAS ETAPAS</span><h2 id="next-title">El mapa es tuyo</h2><p>Has llegado al final de tu ruta de lectura.</p></div></div>';
    return;
  }
  $('#next-card').innerHTML = `<div class="next-card-top"><span class="pulse"></span> PRÓXIMA LECTURA <span class="next-number">${pad(book.n)} / 32</span></div><div class="next-card-inner">${cover(book, 'next-cover')}<div class="next-text"><span class="kicker">${esc(worldName(book).toUpperCase())} · ${esc(book.series.toUpperCase())}</span><h2 id="next-title">${esc(book.title)}</h2><p>${esc(teaser(book))}</p>${book.arc ? '<span class="anthology-tag">✧ En Arcanum ilimitado</span>' : ''}${book.optional ? '<span class="anthology-tag">OPCIONAL</span>' : ''}</div></div><div class="next-actions"><button class="next-link" type="button" data-book="${book.n}">Ver ficha sin spoilers <span aria-hidden="true">→</span></button><button class="button button-primary mark-button" type="button" data-mark-read>Ya me lo he leído ✓</button>${book.optional ? '<button class="optional-skip" type="button" data-skip>Omitir lectura opcional</button>' : ''}</div>`;
}
function renderMap() {
  const ids = discoveredWorlds();
  if (!ids.includes(selectedWorld)) selectedWorld = ids[0];
  $('#world-count').textContent = `✦ ${pad(ids.length)} MUNDOS DESCUBIERTOS`;
  for (const id of ['scadrial', 'roshar']) {
    const button = $(`.planet-${id}`);
    const items = availableBooks().filter(book => book.world === id);
    const read = items.filter(book => status(book) === 'read').length;
    button.setAttribute('aria-label', `${WORLDS[id].name}: ${read} leídos${items.some(book => status(book) === 'next') ? ' y siguiente lectura' : ''}`);
    button.querySelector('.planet-label > span').textContent = `${read} leídos${items.some(book => status(book) === 'next') ? ' · 1 siguiente' : ''}`;
  }
  $('#extra-worlds').innerHTML = ids.filter(id => !['scadrial', 'roshar'].includes(id)).map((id, index) => `<button type="button" class="extra-world" data-select-world="${id}"><span class="extra-world-orb" aria-hidden="true">✦</span><span><small>MUNDO DESCUBIERTO · ${pad(index + 3)}</small><strong>${esc(WORLDS[id].name)}</strong></span></button>`).join('');
  selectWorld(selectedWorld);
}
function selectWorld(id, scroll = false) {
  const ids = discoveredWorlds();
  if (!ids.includes(id)) return;
  selectedWorld = id;
  document.querySelectorAll('[data-select-world]').forEach(button => {
    const active = button.dataset.selectWorld === id;
    button.classList.toggle('is-active', active);
    button.setAttribute('aria-pressed', String(active));
  });
  $('#dossier-code').textContent = `${pad(ids.indexOf(id) + 1)} / ${pad(ids.length)}`;
  $('#dossier-icon').textContent = id === 'roshar' ? '✧' : '✦';
  $('#dossier-title').textContent = WORLDS[id].name;
  $('#dossier-description').textContent = WORLDS[id].description;
  const items = availableBooks().filter(book => book.world === id);
  $('#dossier-count').textContent = pad(items.length);
  $('#world-books').innerHTML = items.map(book => `<button class="world-book ${status(book) === 'next' ? 'next' : ''}" type="button" data-book="${book.n}"><span class="world-book-number">${pad(book.n)}</span><span class="book-mini-cover">${book.cover ? `<img src="${book.cover}" alt="" loading="lazy">` : '✦'}</span><span class="world-book-title">${esc(book.title)}<small>${status(book) === 'next' ? 'SIGUIENTE LECTURA' : 'LEÍDO'}</small></span><span class="world-book-arrow" aria-hidden="true">↗</span></button>`).join('');
  if (scroll) $('#mapa').scrollIntoView({ behavior: 'smooth', block: 'start' });
}
function renderRoute() {
  $('#route-visible').innerHTML = BOOKS.filter(book => status(book) !== 'locked').map(book => status(book) === 'skipped'
    ? `<div class="route-card skipped" aria-label="${esc(book.title)}: lectura opcional omitida"><span class="route-card-body"><span class="route-card-top">${pad(book.n)} / 32 · OPCIONAL</span><h3>${esc(book.title)}</h3><p>${esc(book.series)}</p><span class="route-status">○ OMITIDO</span></span></div>`
    : `<button class="route-card ${status(book) === 'next' ? 'next' : ''}" type="button" data-book="${book.n}"><span class="route-card-cover">${cover(book)}</span><span class="route-card-body"><span class="route-card-top">${pad(book.n)} / 32 · ${esc(worldName(book).toUpperCase())}</span><h3>${esc(book.title)}</h3><p>${esc(book.series)}</p><span class="route-status">${status(book) === 'next' ? '✦ SIGUIENTE LECTURA' : '✓ LEÍDO'}</span></span></button>`).join('');
  const future = BOOKS.filter(book => status(book) === 'locked');
  $('#locked-header').hidden = future.length === 0;
  $('#locked-range').textContent = future.length ? `${pad(future[0].n)} — ${pad(future.at(-1).n)}` : '';
  $('#route-locked').innerHTML = future.map(book => `<div class="locked-step" aria-label="${esc(book.title)}: bloqueado"><span class="locked-number">${pad(book.n)} / 32</span><strong>${esc(book.title)}</strong><span class="locked-tags">${book.arc ? '<em>ARC.I.</em>' : ''}${book.optional ? '<em>OPCIONAL</em>' : ''}${book.english ? '<em>EN INGLÉS</em>' : ''}</span><span class="locked-state">BLOQUEADO</span></div>`).join('');
}
function openBook(number) {
  const book = BOOKS[Number(number) - 1];
  if (!book || !['read', 'next'].includes(status(book))) return;
  const isRead = status(book) === 'read';
  const d = details(book);
  $('#dialog-content').innerHTML = `<div class="dialog-inner">${cover(book, 'dialog-cover')}<div class="dialog-copy"><p class="kicker">${isRead ? 'LECTURA COMPLETADA' : 'SIGUIENTE LECTURA'} · ${esc(worldName(book).toUpperCase())} · ${pad(book.n)} / 32</p><h2 id="dialog-title">${esc(book.title)}</h2><p>${esc(isRead ? d.summary : teaser(book))}</p><div class="dialog-meta"><span>${esc(book.series)}</span><span>${isRead ? 'Leído' : 'Por leer'}</span></div>${!isRead && book.note ? `<p class="dialog-warning">✧ ${esc(book.note)}</p>` : ''}${!isRead ? `<button class="button button-primary mark-button" type="button" data-mark-read>Ya me lo he leído ✓</button>${book.optional ? '<button class="optional-skip" type="button" data-skip>Omitir esta lectura opcional</button>' : ''}` : ''}</div></div>${isRead && d.moments.length ? `<section class="dialog-section"><span class="kicker">LO QUE YA CONOCES · CONTIENE SPOILERS</span><h3>Momentos de esta lectura</h3><ul>${d.moments.map(item => `<li>${esc(item)}</li>`).join('')}</ul>${d.characters.length ? `<p class="character-line">Personajes: ${d.characters.map(esc).join(' · ')}</p>` : ''}</section>` : ''}${isRead && d.art.length ? `<section class="dialog-section"><span class="kicker">GALERÍA DEL MUNDO</span><h3>Ilustraciones</h3><div class="art-gallery">${d.art.map(art => `<figure><img src="${art.src}" alt="${esc(art.title)}" loading="lazy"><figcaption>${esc(art.title)} · <a href="${art.source}" target="_blank" rel="noopener noreferrer">${esc(art.credit)}</a></figcaption></figure>`).join('')}</div></section>` : ''}<button class="dialog-close-bottom" type="button" data-close-dialog>Cerrar ficha</button>`;
  $('#book-dialog').showModal();
}
function openPin(action) {
  const book = currentBook();
  if (!book || (action === 'skip' && !book.optional)) return;
  pendingAction = action;
  if ($('#book-dialog').open) $('#book-dialog').close();
  $('#pin-title').textContent = action === 'skip' ? 'Omitir lectura opcional' : 'Confirma la lectura';
  $('#pin-book-title').textContent = `${pad(book.n)} · ${book.title}`;
  $('#pin-error').textContent = '';
  $('#pin-input').value = '';
  $('#pin-dialog').showModal();
  $('#pin-input').focus();
}
async function hashPin(pin) {
  const bytes = new TextEncoder().encode(pin);
  return [...new Uint8Array(await crypto.subtle.digest('SHA-256', bytes))].map(n => n.toString(16).padStart(2, '0')).join('');
}
async function confirmPin(event) {
  event.preventDefault();
  const pin = $('#pin-input').value;
  if (!/^\d{4}$/.test(pin)) { $('#pin-error').textContent = 'Escribe cuatro cifras.'; return; }
  try {
    if (await hashPin(pin) !== PIN_HASH) {
      $('#pin-error').textContent = 'PIN incorrecto. Vuelve a intentarlo.';
      $('#pin-input').value = '';
      $('#pin-input').focus();
      return;
    }
    const book = currentBook();
    if (!book) return;
    saveHistory([...history, { n: book.n, status: pendingAction === 'skip' ? 'skipped' : 'read' }]);
    $('#pin-dialog').close();
    renderAll();
    if (pendingAction === 'read') openBook(book.n);
  } catch { $('#pin-error').textContent = 'No se pudo guardar el progreso en este navegador. Abre la web desde GitHub Pages o un servidor local.'; }
}
function renderAll() { renderProgress(); renderNext(); renderMap(); renderRoute(); }
document.addEventListener('click', event => {
  const world = event.target.closest('[data-select-world]');
  if (world) selectWorld(world.dataset.selectWorld, !world.classList.contains('planet-button'));
  const book = event.target.closest('[data-book]');
  if (book) openBook(book.dataset.book);
  if (event.target.closest('[data-mark-read]')) openPin('read');
  if (event.target.closest('[data-skip]')) openPin('skip');
  if (event.target.closest('[data-close-dialog], #dialog-close') || event.target === $('#book-dialog')) $('#book-dialog').close();
  if (event.target.closest('[data-close-pin]') || event.target === $('#pin-dialog')) $('#pin-dialog').close();
});
$('#pin-form').addEventListener('submit', confirmPin);
document.addEventListener('error', event => { if (event.target instanceof HTMLImageElement) event.target.remove(); }, true);
renderAll();
